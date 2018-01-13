import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as paymentsActions from '../../../actions/paymentsActions'

import Payments from './Payments'

class PaymentsContainer extends Component {
  
   async componentWillMount(){

    await this.props.paymentsActions.fetchPayments()

  }

  render(){
    return(
     <Payments
        data={this.props.list}
      />
    )
  }
}

function mapStateToProps(state){

  return {

    list: state.payments.list,
    loading: state.payments.loading

  }

}

function mapDispatchToProps(dispatch){

  return {

    paymentsActions: bindActionCreators(paymentsActions,dispatch)

  }

}
export default connect(mapStateToProps,mapDispatchToProps)(PaymentsContainer)