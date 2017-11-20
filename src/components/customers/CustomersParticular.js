import React, { Component } from 'react';
import {getCustomers} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
let count = 0

class CustomersParticular extends Component {
	constructor(){
		super()
		this.state={
			customer:[{
        count:0,
        id:'',
        entry_date:'',
        contact:'',
        email: '',
        city:'',
        contact_id: '',
        phone: '',
        expand:[{
          address:'',
          notes: '',
        }]
      }]
			}
		}
 	componentDidMount(){
    getCustomers('particular')
    .then(response =>
      this.setState({
          customer: [...response]
          .map(function (customer){
            return ({
              count: count++,
              id:customer._id,
              entry_date:customer.entry_date,
              contact:customer.contact,
              email: customer.email,
              city:customer.city,
              contact_id: customer.contact_id,
              phone: customer.phone,
              expand: [{
                notes: customer.notes,
                address:customer.address
              }]
                      
            })
          })
        })
    )}
  rowClassNameFormat(row, rowIdx) {
    return rowIdx % 2 === 0 ? 'BootstrapTable-tr-intermitate-color' : '';}
  isExpandableRow(row) {
    if ((row.count < 0)) return false;
    return true;}
  expandComponent(row) {
    return (
      <BSTable data={ row.expand } />
    );}
  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = '';

    if (isExpandableRow) {
      content = (isExpanded ? '(-)' : '(+)' );
    } else {
      content = ' ';
    }
    return (
      <div> { content } </div>
    );}
  render(props){
   const tdStyle={whiteSpace: 'normal'}
    return(
     <BootstrapTable 
     	className="BootstrapTable-style" 
     	hover condensed  
      data={ this.state.customer } 
     	options={{defaultSortName:'contact', defaultSortOrder: 'asc',  expandBy: 'column' }} 
      expandableRow={ this.isExpandableRow }
      expandComponent={ this.expandComponent }
      autoCollapse={ { sort: true, search: true, filter: true } }
      expandColumnOptions={ {
          expandColumnVisible: true,
          expandColumnComponent: this.expandColumnComponent,
          columnWidth: 25}}
      trClassName={this.rowClassNameFormat}>
        <TableHeaderColumn dataField='count' hidden={ true } isKey={ true } dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
       	<TableHeaderColumn dataField='contact' tdStyle={tdStyle} dataSort filter={ { type: 'TextFilter', delay: 100 } }>Contacto</TableHeaderColumn>
        <TableHeaderColumn dataField='phone' tdStyle={tdStyle} dataSort filter={ { type: 'TextFilter', delay: 100 } }>Teléfono</TableHeaderColumn>
        <TableHeaderColumn dataField='email' tdStyle={tdStyle} dataSort filter={ { type: 'TextFilter', delay: 100 } }>Email</TableHeaderColumn>
        <TableHeaderColumn dataField='city' tdStyle={tdStyle} dataSort filter={ { type: 'TextFilter', delay: 100 } }>Ciudad</TableHeaderColumn>
     </BootstrapTable>

		)
  }

}
class BSTable extends React.Component {
  render() {
    if (this.props.data) {
       const tdStyle={whiteSpace: 'normal'}
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='address' tdStyle={tdStyle} isKey={ true }>Dirección</TableHeaderColumn>
          <TableHeaderColumn dataField='notes'tdStyle={tdStyle}>Notas</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }}
export default PanelContainer(CustomersParticular)