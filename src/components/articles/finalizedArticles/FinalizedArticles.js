import React, { Component } from 'react';
import PanelContainer from '../../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import MySearchField from '../../forms/MySearchField'
import MyButtonAction from '../../forms/MyButtonAction'

let resultSearch=''

class FinalizedArticles extends Component {
  constructor(){
    super()
    this.handleAfterSearch = this.handleAfterSearch.bind(this)
    this.onRowSelect = this.onRowSelect.bind(this)
    this.onSelectAll =  this.onSelectAll.bind(this)
    this.resetState =  this.resetState.bind(this)
  }
  dateFormatter(cell, row) {
    cell =new Date(cell)
    return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
  }
  priceFormatter(cell, row) {

    return `${cell} <i class='glyphicon glyphicon-eur'></i>`;
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
  onRowSelect(row, isSelected, e) {
    //console.log("id: ",row.id);
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
  handleAfterSearch(searchText, result) {
    //este variable la declaro fuera de la clase por que necesito su valor pero no puedo usar el setState
    //me renderiza y me haria bucle infinto
    if (searchText === '') {
      this.refs.table.cleanSelected();
    }else{
      resultSearch = result
     return result
    }
  }
  createCustomButtonGroup = props => {
    return (
      <MyButtonAction 
        handleMultipleSelection={this.props.handleMultipleSelection}
        data={this.props.selected}
        name={"Entregar"}
        resetState={this.resetState}
      />
    );
  }
  resetState(){
    this.props.updateSelectedRows([])
  }
  render(){
    const options = {
      defaultSortName:'output_date',
      defaultSortOrder: 'desc',
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
        />) }
    const selectRowProp = {
      mode: 'checkbox',
      bgColor: 'pink',
      clickToSelect: true,
      onSelect: this.onRowSelect,
      onSelectAll: this.onSelectAll
    };
    return(
      <BootstrapTable
      ref='table'
      selectRow={ selectRowProp }  
      className="BootstrapTable-style"
      striped hover condensed search
      data={ this.props.data.articles } 
      options={options}  
      trClassName={this.rowClassNameFormat}>
        <TableHeaderColumn dataField='id' isKey hidden={ true } dataSort>Cliente</TableHeaderColumn>
        <TableHeaderColumn dataField='customer_contact' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
        <TableHeaderColumn dataField='type' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Artículo</TableHeaderColumn>
        <TableHeaderColumn dataField='leather'dataSort filter={ { type: 'TextFilter', delay: 100 } }>Tipo</TableHeaderColumn>
        <TableHeaderColumn dataField='color' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Color</TableHeaderColumn>
        <TableHeaderColumn dataField='output_date' width='245'dataFormat={ this.dateFormatter } dataSort filter={ { type: 'DateFilter', delay: 100 } }>Finalizado</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataSort dataFormat={ this.priceFormatter } filter={ { type: 'TextFilter', delay: 100 } }>Precio</TableHeaderColumn> 
        <TableHeaderColumn dataField='barcode' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Código de barras</TableHeaderColumn> 
      </BootstrapTable>
    )
  }
}

export default PanelContainer(FinalizedArticles)