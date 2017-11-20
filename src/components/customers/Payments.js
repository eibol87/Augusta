import React, { Component } from 'react';
import {getCustomersPayments} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Moment from 'moment'


class Payments extends Component {
  constructor(){
    super()
    this.state={
      payments:[{
        client:'',
        plusInvoces:'',
        plusAllPayments:''
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
              plusInvoces:customer.sumAllInvoces,
              client:customer.client,
              plusAllPayments:customer.sumAllPayments
            })
          })
        })
      )
  }
  dateFormatter(cell, row) {
    cell =new Date(cell)
    return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
  }
  getDebt(){
    return this.state.plusInvoces - this.state.plusAllPayments
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
        <TableHeaderColumn dataField='plusInvoces' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Facturado</TableHeaderColumn>
        <TableHeaderColumn dataField='plusAllPayments'  dataSort filter={ { type: 'TextFilter', delay: 100 } }>Pagado</TableHeaderColumn>
        <TableHeaderColumn dataField='numberOfArticles'  dataSort filter={ { type: 'TextFilter', delay: 100 } }>Diferencia</TableHeaderColumn>
      </BootstrapTable>
      </div>
    
    )
  }
}

export default PanelContainer(Payments)