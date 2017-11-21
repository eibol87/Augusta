import React, { Component } from 'react';
import {getCustomers,UpdateCustomer} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class CustomersParticular extends Component {
	constructor(props){
		super(props)
		this.state={
			customer:[{
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
      }],
      edited: []
			}
      this.editedProdNameClassName = this.editedProdNameClassName.bind(this);
      this.onAfterSaveCell = this.onAfterSaveCell.bind(this)
		}
     // collect which cell that user edited
  onAfterSaveCell({ id }, cellName) {
    //console.log( id, cellName )
    this.setState({
      edited: [ ...this.state.edited, { id, cellName } ]
    })
  
  }
 	componentDidMount(){
    getCustomers('particular')
    .then(response =>
      this.setState({
          customer: [...response]
          .map(function (customer){
            return ({
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
  
  editedProdNameClassName(fieldValue, row) {
    return this.editedClassName(row, 'contact');
  }
  editedClassName(row, cellName) {
    const result = this.state.edited.find(e => e.id === row.id && cellName === e.cellName);
    return result ? 'edited-class' : '';
  }
  updateCell(){
    const lastIndex = this.state.edited.length
    const data =this.state.edited[lastIndex -1]
    const cellname = data.cellName
    const busqueda =this.state.customer.filter(element => element.id === data.id )
    const body = new Object;
    body[cellname] =busqueda[0][cellname]
    UpdateCustomer(data.id,body)
  }
  render(props){
  const hasEdited = this.state.edited.length
  if(hasEdited) this.updateCell()
   const tdStyle={whiteSpace: 'normal'}
   const cellEditProp = {mode: 'dbclick', blurToSave: true, afterSaveCell: this.onAfterSaveCell}
    return(
     <BootstrapTable 
     cellEdit={ cellEditProp }
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
        <TableHeaderColumn dataField='id' hidden={ true } isKey={ true } dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
       	<TableHeaderColumn dataField='contact' columnClassName={ this.editedProdNameClassName } tdStyle={tdStyle} dataSort filter={ { type: 'TextFilter', delay: 100 } }>Contacto</TableHeaderColumn>
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
    const cellEditProp = {mode: 'dbclick'}
      return (
        <BootstrapTable cellEdit={ cellEditProp } data={ this.props.data }>
          <TableHeaderColumn dataField='address' tdStyle={tdStyle} isKey={ true }>Dirección</TableHeaderColumn>
          <TableHeaderColumn dataField='notes'tdStyle={tdStyle}>Notas</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }}
export default PanelContainer(CustomersParticular)