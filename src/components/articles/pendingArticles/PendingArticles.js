import React, { Component } from 'react';
import PanelContainer from '../../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import MySearchField from '../../forms/MySearchField'

class PendingArticles extends Component {
  constructor(){
    super()
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
	dateFormatter(cell, row) {
		cell =new Date(cell)
		return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
	}
	 createCustomToolBar = props => {
    return (
      <div style={ { margin: '0px 0px 10px 0px' } }>
        { props.components.btnGroup }
        <div className='col-xs-8 col-sm-4 col-md-4 col-lg-2'>
          { props.components.searchPanel }
        </div>
      </div>
  )}
  handleKeyPress= (target) => {
    if(target.charCode === 13){
      alert('ABEEEEL!!!'); 
  }}
	render(){
		const options={
      defaultSortName:'customer_contact',
      defaultSortOrder: 'asc',
      toolBar: this.createCustomToolBar,
      searchField: (props) => (
        <MySearchField { ...props }
          placeholder={"hola"}
          onKeyPress={this.handleKeyPress}/>)
    }
  	return(
	   	<BootstrapTable 
	    	className="BootstrapTable-style" 
	     	striped hover condensed search
	     	data={ this.props.data.articles } 
	     	options={options} 
	     	trClassName={this.rowClassNameFormat}>
		  <TableHeaderColumn dataField='customer_contact' isKey dataSort>Cliente</TableHeaderColumn>
		  <TableHeaderColumn dataField='type' dataSort>Artículo</TableHeaderColumn>
		 	<TableHeaderColumn dataField='leather'dataSort>Tipo</TableHeaderColumn>
		  <TableHeaderColumn dataField='color' dataSort>Color</TableHeaderColumn>
	  	<TableHeaderColumn dataField='entry_date' dataFormat={ this.dateFormatter } dataSort>Alta</TableHeaderColumn>
	  	<TableHeaderColumn dataField='barcode' dataSort>Código de barras</TableHeaderColumn> 
	    </BootstrapTable>
	  )
  }
}

export default PanelContainer(PendingArticles)