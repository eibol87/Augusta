import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as articleActions from '../../../actions/articleActions'

import Articles from './Articles'


class ArticlesContainer extends Component {

  async componentWillMount(){

    await this.props.articleActions.fetchArticles()

  }

  render(){
  
    return (

      <Articles data={this.props.list} states={this.props.states} />
      
    )
  }

}

function mapStateToProps(state){

  return {

    list: state.article.list,
    loading: state.article.loading,
    states: state.article.states

  }

}

function mapDispatchToProps(dispatch){

  return {

    articleActions: bindActionCreators(articleActions,dispatch)

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ArticlesContainer)
