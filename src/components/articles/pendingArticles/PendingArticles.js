import React, { Component } from 'react';

import PanelContainer from '../../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

import MySearchField from '../../forms/MySearchField'
import MyButtonAction from '../../forms/MyButtonAction'

let resultSearch=''

class PendingArticles extends Component {

  constructor(props){

    super(props)
    
    this.handleAfterSearch = this.handleAfterSearch.bind(this)
    this.onRowSelect = this.onRowSelect.bind(this)
    this.onSelectAll =  this.onSelectAll.bind(this)
    this.resetState =  this.resetState.bind(this)

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

    )

  }

  handleAfterSearch(searchText, result) {

    //este variable la declaro fuera de la clase por que necesito su valor pero no puedo usar el setState
    //me renderiza y me haria bucle infinto
    
    if (searchText === '') {

      this.refs.table.cleanSelected()

    }else{

      // this.props.updateStateSelected()
      resultSearch = result
      return result
    }

  }

  createCustomButtonGroup = props => {

    return (

      <MyButtonAction 

        handleMultipleSelection={this.props.handleMultipleSelection}
        data={this.props.selected}
        name={"Finalizar"}
        resetState={this.resetState}

      />

    )

  }

  onRowSelect(row, isSelected, e) {

    const filter = this.props.selected.find(selected => selected.id === row.id );
    
    if(filter){

      const filter = this.props.selected.filter(selected => selected.id !== row.id );
      
      this.props.updateSelectedRows(filter)

    }else{

      const joined = this.props.selected.concat(row);
      
      this.props.updateSelectedRows(joined)

    }

  }

  onSelectAll(isSelected, rows){

    if((this.props.selected).length > 0 ){

       this.props.updateSelectedRows([])

    }else{

      this.props.updateSelectedRows(rows)

    }

  }

  resetState(){
    //reset state for selected
    this.props.updateSelectedRows([])

  }
  
	render(){
    const options={
      defaultSortName:'customer_contact',
      defaultSortOrder: 'asc',
      btnGroup: this.createCustomButtonGroup,
      toolBar: this.createCustomToolBar,
      afterSearch: this.handleAfterSearch,
      searchField: (props) => (
        <MySearchField { ...props }
          resetState={this.resetState}
          placeholder={this.props.placeholder}
          data={resultSearch}
          updateData={this.props.updateData}
          handleKeyPress={this.props.handleKeyPress}
        />)
    }
    const selectRowProp = {
      mode: 'checkbox',
      bgColor: 'pink',
      clickToSelect: true,
      onSelect: this.onRowSelect,
      onSelectAll: this.onSelectAll
    };
  	return(
      <div>
         	<BootstrapTable 
            selectRow={ selectRowProp }
            ref='table'
    	    	className="BootstrapTable-style" 
    	     	striped hover condensed search
    	     	data={ this.props.data } 
    	     	options={options} 
    	     	trClassName={this.rowClassNameFormat}>
    		  <TableHeaderColumn dataField='id' isKey hidden={ true } dataSort>Cliente</TableHeaderColumn>
          <TableHeaderColumn dataField='customer_contact' dataSort>Cliente</TableHeaderColumn>
    		  <TableHeaderColumn dataField='type' dataSort>Artículo</TableHeaderColumn>
    		 	<TableHeaderColumn dataField='leather'dataSort>Tipo</TableHeaderColumn>
    		  <TableHeaderColumn dataField='color' dataSort>Color</TableHeaderColumn>
    	  	<TableHeaderColumn dataField='entry_date' dataFormat={ this.dateFormatter } dataSort>Alta</TableHeaderColumn>
    	  	<TableHeaderColumn dataField='barcode' dataSort>Código de barras</TableHeaderColumn> 
    	    </BootstrapTable>
	     </div>
    )
  }
}

export default PanelContainer(PendingArticles)