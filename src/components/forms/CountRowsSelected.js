import React, { Component } from 'react';
import { Well } from 'react-bootstrap'

class CountRowsSelected extends Component {
  constructor(){
    super()
    this.state={
      selected:0
    }
    this.updateStateSelected = this.updateStateSelected.bind(this)
  }
  updateStateSelected(selecteds){
    this.setState({selected:selecteds})
  }

  render(){
    return (
      <div className="CountRowsSelected">
        <Well updateStateSelected={this.updateStateSelected}>
          {`${this.state.selected} registros seleccionados`}
        </Well>
      </div>
      )
  }
}

export default CountRowsSelected