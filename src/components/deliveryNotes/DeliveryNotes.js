import React, { Component } from 'react';
import {getDeliveryNotes} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Moment from 'moment'


class DeliveryNotes extends Component {
	constructor(){
		super()
		this.state={
			deliveryNotes:[{
				_id:'',
				entry_date:'',
				customer_name:'',
				numberOfArticles:''
			}]
			}
		}
	
	componentDidMount(){
		getDeliveryNotes()
			.then(response =>
				this.setState({
					deliveryNotes: [...response]
					.map(function (deliveryNote){
						return ({
							_id:deliveryNote._id,
							entry_date:Moment(deliveryNote.entry_date).format('L'),
							customer_name:deliveryNote.customer_id.contact,
							numberOfArticles:[...deliveryNote.articles].length
						})
					})
				})
			)
	}
	
  render(){
    return(
    <div>
   
    <BootstrapTable 
     	className="BootstrapTable-style" 
     	striped hover condensed height='300' 
     	data={ this.state.deliveryNotes } 
     	options={{defaultSortName:'entry_date', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}>
	     <TableHeaderColumn dataField='entry_date' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Fecha entrada'</TableHeaderColumn>
	      <TableHeaderColumn dataField='customer_name' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
	      <TableHeaderColumn dataField='numberOfArticles'  dataSort filter={ { type: 'TextFilter', delay: 100 } }>Número de articulos</TableHeaderColumn>
	    </BootstrapTable>
	    </div>
		
    )
  }
}

export default PanelContainer(DeliveryNotes)