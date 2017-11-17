import React, { Component } from 'react';
import {getPricesList} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class PricesList extends Component {
	constructor(){
		super()
		this.state={
			pricesList:[{
				_id:'',
				type:'',
				leather: '',
				base_price:'',
				prices_per_customer:''

			}]
			}
		}
	componentDidMount(){
		getPricesList()
			.then(response =>
				this.setState({
					pricesList: [...response]
					.map(function (priceList){
						const sum = (priceList.assign_prices.reduce((acc, sum) => acc + Number(sum) ,0))
						const avg= (sum/priceList.assign_prices.length).toFixed(2)
						return ({
							_id:priceList._id,
							type:priceList.type,
							leather: priceList.leather,
							base_price:priceList.base_price,
							prices_per_customer:avg
						})
					})
				})
			)
	}
	
  render(){
    return(
    	<BootstrapTable 
     	className="BootstrapTable-style" 
     	striped hover condensed height='300' 
     	data={ this.state.pricesList } 
     	options={{defaultSortName:'type', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}>
	     	<TableHeaderColumn dataField='type' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Tipo</TableHeaderColumn>
	      <TableHeaderColumn dataField='leather' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Categoría</TableHeaderColumn>
	      <TableHeaderColumn dataField='base_price' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Precio Base</TableHeaderColumn>
	      <TableHeaderColumn dataField='prices_per_customer' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Precio Medio</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

export default PanelContainer(PricesList)