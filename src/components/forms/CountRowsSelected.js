import React, { Component } from 'react';
import { Well } from 'react-bootstrap'
let resultSearch=''
class CountRowsSelected extends Component {
  constructor(){
    super()
    this.state={
      count:0,
      search:[]
    }
    this.updateStateSelected = this.updateStateSelected.bind(this)
    this.handleAfterSearch = this.handleAfterSearch.bind(this)
  }
  updateStateSelected(selecteds){
    this.setState({count:selecteds})
  }
  handleAfterSearch(searchText, result) {
    //este variable la declaro fuera de la clase por que necesito su valor pero no puedo usar el setState
    //me renderiza y me haria bucle infinto
   
    if (searchText === '') {
     // this.refs.table.cleanSelected();
    }else{
      // this.props.updateStateSelected()
      //this.setState({search:result})
      resultSearch = result
     return result
    }
  }

  render(){
    return (
      <div className="CountRowsSelected">
        <Well  
          handleAfterSearch={this.handleAfterSearch}  
          updateStateSelected={this.updateStateSelected}>
          {`${this.state.count} registros seleccionados`}
        </Well>
      </div>
      )
  }
}

export default CountRowsSelected