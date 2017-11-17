import React, { Component } from 'react';
import {getArticles} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

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
		getArticles(this.props.match.params.state)
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
							customer_contact:article.customer_id.contact,
							customer_fiscal_name:article.customer_id.fiscal_name
								
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
							customer_contact:article.customer_id.contact,
							customer_fiscal_name:article.customer_id.fiscal_name
								
						})
					})
				})
				)
	}

	getBodyTable(){
		return this.state.articles.map((article) => {
			return [article.customer_id.contact,article.type,article.type,article.color,article.state,article.barcode]
		})
	}
	
  render(){
  	const NameCustomer = (this.state.customer_fiscal_name == '') ? 'customer_contact' : 'customer_fiscal_name'
  	  return(
    	<BootstrapTable 
     	className="BootstrapTable-style" 
     	striped hover condensed height='300' 
     	data={ this.state.articles } 
     	options={{defaultSortName:'customer_contact', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}>
	    <TableHeaderColumn dataField='customer_contact' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
	    <TableHeaderColumn dataField='type' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Tipo</TableHeaderColumn>
	    <TableHeaderColumn dataField='leather' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Piel</TableHeaderColumn>
	    <TableHeaderColumn dataField='color' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Color</TableHeaderColumn>
    	<TableHeaderColumn dataField='state' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Estado</TableHeaderColumn>
     	<TableHeaderColumn dataField='barcode' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Código de barras</TableHeaderColumn>
       
      </BootstrapTable>
	    )
  }
}

export default PanelContainer(Articles)