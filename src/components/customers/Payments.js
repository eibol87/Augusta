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
        customer_name:'',
        plusInvoces:''
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
              plusInvoces:'',
              customer_name:(customer.customer_id.fiscal_name) ? customer.customer_id.fiscal_name : customer.customer_id.contact
            })
          })
        })
      )
  }
  dateFormatter(cell, row) {
    cell =new Date(cell)
    return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
  }
  
  render(){
    return(
    <div>
    <BootstrapTable 
      className="BootstrapTable-style" 
      striped hover condensed height='300' 
      data={ this.state.payments } 
      options={{defaultSortName:'customer_name', defaultSortOrder: 'asc' }} 
      trClassName={this.rowClassNameFormat}>
        <TableHeaderColumn dataField='customer_name' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
        <TableHeaderColumn dataField='plusInvoces' dataSort filter={ { type: 'DateFilter', delay: 100 } }>Facturado'</TableHeaderColumn>
        <TableHeaderColumn dataField='numberOfArticles'  dataSort filter={ { type: 'TextFilter', delay: 100 } }>Pagado</TableHeaderColumn>
        <TableHeaderColumn dataField='numberOfArticles'  dataSort filter={ { type: 'TextFilter', delay: 100 } }>Diferencia</TableHeaderColumn>
      </BootstrapTable>
      </div>
    
    )
  }
}

export default PanelContainer(Payments)