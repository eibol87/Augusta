import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as deliveryNotesActions from '../../actions/deliveryNotesActions'

import DeliveryNotes from './DeliveryNotes'

class DeliveryNotesContainer extends Component {
  
  async componentWillMount(){

    await this.props.deliveryNotesActions.fetchDeliveryNotes()

  }

  render(){
  
    return (

      <DeliveryNotes data={this.props.list} />
      
    )
  }
  
}

function mapStateToProps(state){

  return {

    list: state.deliveryNotes.list,
    loading: state.deliveryNotes.loading

  }

}

function mapDispatchToProps(dispatch){

  return {

    deliveryNotesActions: bindActionCreators(deliveryNotesActions,dispatch)

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(DeliveryNotesContainer)