import React, { Component } from 'react';
import PanelContainer from '../../panelContainer/PanelContainer.js'
import AddArticlesModal from './AddArticlesModal'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class AddArticles extends Component {
  createCustomModalHeader(onClose, onSave) {
    const headerStyle = {
      fontWeight: 'bold',
      fontSize: 'large',
      textAlign: 'center',
      backgroundColor: '#eeeeee'
    };
    return (
      <div className='modal-header' style={ headerStyle }>
        <h3>Añadir nuevo Artículo</h3>
      </div>
    )
  }
  createCustomModalBody = (columns, validateState, ignoreEditable) => {
    return (
      <AddArticlesModal 
        getPriceArticle={this.props.getPriceArticle}
        columns={ columns }
        getComplements={this.props.getComplements}
        getColors={this.props.getColors} 
        getListCustomers={this.props.getListCustomers}
        getListArticle={this.props.getListArticle}
        validateState={ validateState }
        ignoreEditable={ ignoreEditable }/>
    );
  }
  render(){
    const options ={
      defaultSortName:'type',
      defaultSortOrder: 'asc',
      expandBy: 'column',
      insertText: 'Añadir artículo',
      insertModalHeader: this.createCustomModalHeader,
      insertModalBody: this.createCustomModalBody,
      afterInsertRow: this.props.onAfterInsertRow
    }
    return (
      <BootstrapTable 
        className="BootstrapTable-style" 
        striped hover condensed insertRow
        data={ this.props.articles } 
        options={options}>
        <TableHeaderColumn dataField='id' hiddenOnInsert isKey autoValue={ true } hidden={ true }>id</TableHeaderColumn>
        <TableHeaderColumn dataField='customer_contact' hiddenOnInsert>Cliente</TableHeaderColumn>
        <TableHeaderColumn dataField='type' hiddenOnInsert >Tipo</TableHeaderColumn>
        <TableHeaderColumn dataField='leather' hiddenOnInsert >Categoría</TableHeaderColumn>
        <TableHeaderColumn dataField='color' hiddenOnInsert>Color</TableHeaderColumn>
        <TableHeaderColumn dataField='complements' hiddenOnInsert>Complementos</TableHeaderColumn>
        <TableHeaderColumn dataField='final_customer_code'>Código Cliente</TableHeaderColumn>
        <TableHeaderColumn dataField='barcode'>Código barras</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Precio</TableHeaderColumn>
      </BootstrapTable>
      )
  }

}

export default PanelContainer(AddArticles)