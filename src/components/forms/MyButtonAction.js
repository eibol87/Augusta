import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap'

class MyButtonAction extends Component {
  constructor(){
    super()
    this.handleMultipleSelection = this.handleMultipleSelection.bind(this)
  }
  handleMultipleSelection(){
    if(this.props.handleMultipleSelection){
      this.props.handleMultipleSelection(this.props.data)
    }
  }
  render() {
    return (
      <Button 
        onClick={this.handleMultipleSelection}
        bsStyle="danger" 
        bsSize="small">
        Finalizar
      </Button>
    )
  }
}

export default MyButtonAction