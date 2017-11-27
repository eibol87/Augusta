import React, { Component } from 'react';
import PanelContainer from '../../panelContainer/PanelContainer.js'
import ArticlesExpand from './ArticlesExpand'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import MySearchField from '../../forms/MySearchField'


class Articles extends Component {
	rowClassNameFormat(row, rowIdx) {
    return rowIdx % 2 === 0 ? 'BootstrapTable-tr-intermitate-color' : ''}
 
	dateFormatter(cell, row) {
		cell =new Date(cell)
		return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
	}
	enumFormatter(cell, row, enumObject) {
		return enumObject[cell];
	}
	isExpandableRow(row) {
    if ((row.count < 0)) return false;
    return true;}
  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = '';

    if (isExpandableRow) {
      content = (isExpanded ? '(-)' : '(+)' );
    } else {
      content = ' ';
    }
    return (
      <div> { content } </div>
    );}
  expandComponent = (row)=> {
    return (
      <ArticlesExpand data={ row.expand } updateCell={this.props.updateCell} />
    );}
  createCustomToolBar = props => {
    return (
      <div style={ { margin: '0px 0px 10px 0px' } }>
        { props.components.btnGroup }
        <div className='col-xs-8 col-sm-4 col-md-4 col-lg-2'>
          { props.components.searchPanel }
        </div>
      </div>
  )}
	
  render(){
  	const expandColumnOptions={ 
    	expandColumnVisible: true, 
      expandColumnComponent: this.expandColumnComponent,
      columnWidth: 25
    }
    const options ={
      defaultSortName:'entry_date',
      defaultSortOrder: 'asc',
      expandBy: 'column',
      toolBar: this.createCustomToolBar,
      searchField: (props) => (<MySearchField { ...props }/>) 
    }
  	  return(
    	<BootstrapTable 
     	className="BootstrapTable-style" 
     	hover condensed search
     	expandableRow={ this.isExpandableRow }
      expandComponent={ this.expandComponent }
     	data={ this.props.data.articles } 
     	expandColumnOptions={expandColumnOptions }
     	autoCollapse={ { sort: true, search: true, filter: true } }
     	options={options}
     	trClassName={this.rowClassNameFormat}>
	    <TableHeaderColumn width='150' dataField='id' autoValue={ true } hidden={ true } isKey={ true }>Cliente</TableHeaderColumn>
      <TableHeaderColumn dataField='customer_contact'  dataSort>Cliente</TableHeaderColumn>
	    <TableHeaderColumn dataField='type' dataSort>Artículo</TableHeaderColumn>
	    <TableHeaderColumn dataField='leather'dataSort>Tipo</TableHeaderColumn>
	    <TableHeaderColumn dataField='entry_date' width='245'dataFormat={ this.dateFormatter } dataSort filter={ { type: 'DateFilter', delay: 100 } }>Alta</TableHeaderColumn>
     	<TableHeaderColumn dataField='entry_date' width='245'dataFormat={ this.dateFormatter } dataSort filter={ { type: 'DateFilter', delay: 100 } }>Alta</TableHeaderColumn>
     	<TableHeaderColumn dataField='state' dataSort filterFormatted dataFormat={ this.enumFormatter } formatExtraData={ this.props.data.states } filter={ { type: 'SelectFilter', options: this.props.data.states } }>Estado</TableHeaderColumn>
      </BootstrapTable>
	    )
  }
}

export default PanelContainer(Articles)