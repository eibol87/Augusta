import React, { Component } from 'react';
import {getCustomersPayments} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Payments extends Component {
  constructor(){
    super()
    this.state={
      payments:[{
        client:'',
        plusInvoces:'',
        plusAllPayments:'',
        debt:''
      }]
      }
    }
  
  componentDidMount(){
    getCustomersPayments()
      .then(response =>
        this.setState({
          payments: [...response]
          .map(function (customer){
            return ({
              plusInvoces:customer.plusAllInvoces,
              client:customer.client,
              plusAllPayments:customer.plusAllPayments,
              debt:customer.plusAllInvoces-customer.plusAllPayments
            })
          })
        })
      )
  }
  dateFormatter(cell, row) {
    cell =new Date(cell)
    return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
  }
  priceFormatter(cell, row) {
    return `${cell} <i class='glyphicon glyphicon-eur'></i>`;
  }
  
  render(){
    return(
    <div>
    <BootstrapTable 
      className="BootstrapTable-style" 
      striped hover condensed 
      data={ this.state.payments } 
      options={{defaultSortName:'client', defaultSortOrder: 'asc' }} 
      trClassName={this.rowClassNameFormat}>
        <TableHeaderColumn dataField='client' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
        <TableHeaderColumn dataField='plusInvoces' dataFormat={ this.priceFormatter } dataSort filter={ { type: 'TextFilter', delay: 100 } }>Facturado</TableHeaderColumn>
        <TableHeaderColumn dataField='plusAllPayments' dataFormat={ this.priceFormatter } dataSort filter={ { type: 'TextFilter', delay: 100 } }>Pagado</TableHeaderColumn>
        <TableHeaderColumn dataField='debt' dataFormat={ this.priceFormatter } dataSort filter={ { type: 'TextFilter', delay: 100 } }>Diferencia</TableHeaderColumn>
      </BootstrapTable>
      </div>
    )
  }
}

export default PanelContainer(Payments)