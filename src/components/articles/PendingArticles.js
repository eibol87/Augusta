import React, { Component } from 'react';
import {getArticles} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Moment from 'moment'

class PendingArticles extends Component {
	constructor(){
		super()
		this.state={
			articles:[{
				_id:'',
				final_customer_code:'',
				barcode:'',
				type:'',
				leather:'',
				color:'',
				state:'',
				price:'',
				complements:[],
				entry_date:'',
				output_date:'',
				customer_contact:'',
				customer_fiscal_name:''
			}]
			}
		}
	componentDidMount(){
		getArticles('pending')
			.then(response =>
				this.setState({
					articles: [...response]
					.map(function (article){
						return ({
							_id:article._id,
							final_customer_code:article.final_customer_code,
							barcode:article.barcode,
							type:article.type,
							leather:article.leather,
							color:article.color,
							state:article.state,
							price:article.price,
							complements:[...article.complements],
							customer_contact:(article.customer_id.fiscal_name) ? article.customer_id.fiscal_name : article.customer_id.contact,
							customer_fiscal_name:article.customer_id.fiscal_name,
							output_date:Moment(article.output_date).format('L'),	
							entry_date:Moment(article.entry_date).format('L')
						
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
    	<BootstrapTable 
     	className="BootstrapTable-style" 
     	striped hover condensed  
     	data={ this.state.articles } 
     	options={{defaultSortName:'customer_contact', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}>
	    <TableHeaderColumn dataField='customer_contact' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
	    <TableHeaderColumn dataField='type' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Artículo</TableHeaderColumn>
	    <TableHeaderColumn dataField='leather'dataSort filter={ { type: 'TextFilter', delay: 100 } }>Tipo</TableHeaderColumn>
	    <TableHeaderColumn dataField='color' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Color</TableHeaderColumn>
    	<TableHeaderColumn dataField='entry_date' width='245'dataFormat={ this.dateFormatter } dataSort filter={ { type: 'DateFilter', delay: 100 } }>Alta</TableHeaderColumn>
     	<TableHeaderColumn dataField='barcode' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Código de barras</TableHeaderColumn> 
      </BootstrapTable>
	    )
  }
}

export default PanelContainer(PendingArticles)