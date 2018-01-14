import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class MyButtonAction extends Component {
  constructor(){

    super()
    this.handleMultipleSelection = this.handleMultipleSelection.bind(this)
    
  }

  handleMultipleSelection(){

    if(this.props.handleMultipleSelection){

      this.props.handleMultipleSelection(this.props.data)
      this.props.resetState()

    }

  }
  render() {
    return (
      <Button 
        onClick={this.handleMultipleSelection}
        bsStyle="danger" 
        bsSize="small">
        {this.props.name}
      </Button>
    )
  }
}

export default MyButtonAction