import React, { Component } from 'react';
import {getArticles} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Moment from 'moment'

class Articles extends Component {
	constructor(){
		super()
		this.state={
			url:'',
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
	componentWillReceiveProps(nextProps){
		getArticles(nextProps.match.params.state)
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
	componentDidMount(){
		getArticles(this.props.match.params.state)
			.then(response =>
				this.setState({
					articles: [...response]
					.map(function (article){
						console.log(article._id, article.type, article.leather)
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
	enumFormatter(cell, row, enumObject) {
		return enumObject[cell];
	}
	
  render(){
  	const qualityType = {
		  pending: 'pending',
		  finalized: 'finalized',
		  delivered: 'delivered'
		};
  	  return(
    	<BootstrapTable 
     	className="BootstrapTable-style" 
     	striped hover condensed height='300' 
     	data={ this.state.articles } 
     	options={{defaultSortName:'customer_contact', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}>
	    <TableHeaderColumn dataField='customer_contact' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
	    <TableHeaderColumn dataField='type' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Artículo</TableHeaderColumn>
	    <TableHeaderColumn dataField='leather'dataSort filter={ { type: 'TextFilter', delay: 100 } }>Tipo</TableHeaderColumn>
	    <TableHeaderColumn dataField='color' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Color</TableHeaderColumn>
    	<TableHeaderColumn dataField='entry_date' width='245'dataFormat={ this.dateFormatter } dataSort filter={ { type: 'DateFilter', delay: 100 } }>Alta</TableHeaderColumn>
     	<TableHeaderColumn dataField='state' dataSort filterFormatted dataFormat={ this.enumFormatter } formatExtraData={ qualityType } filter={ { type: 'SelectFilter', options: qualityType } }>Estado</TableHeaderColumn>
      <TableHeaderColumn dataField='barcode' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Código de barras</TableHeaderColumn> 
      </BootstrapTable>
	    )
  }
}

export default PanelContainer(Articles)