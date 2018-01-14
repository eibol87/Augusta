import React, { Component } from 'react';

import PendingArticles from './PendingArticles'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as articleActions from '../../../actions/articleActions'

const PENDING = 'pending'
const FINALIZED = 'finalized'

class PendingArticlesContainer extends Component {
  
  async componentWillMount(){
    
    this.getData()
   
  }

  async getData(){

    await this.props.articleActions.fetchArticles(PENDING)

  }

  updateData = async (id) => {
   
    await this.props.articleActions.updateState(id,FINALIZED)

    this.getData() 

  }

  handleKeyPress(id) {

   this.updateData(id)

  }

  handleMultipleSelection = (data) => {

    data.forEach(function(article){
      this.updateData(article.id)
    },this)

  }

  updateSelectedRows = (selected) =>{

    this.props.articleActions.updateSelectRow(selected)

  }

  render(){

    return(

      <PendingArticles

        updateSelectedRows={this.updateSelectedRows}
        selected={this.props.selected}
        data={this.props.list} 
        updateData={this.updateData}
        handleKeyPress={this.handleKeyPress}
        handleMultipleSelection={this.handleMultipleSelection}
        
      />

    )

  }
}

function mapStateToProps(state){

  return {

    list: state.article.list,
    loading: state.article.loading,
    selected: state.article.selected

  }

}

function mapDispatchToProps(dispatch){

  return {

    articleActions: bindActionCreators(articleActions,dispatch)

  }

}
export default connect(mapStateToProps,mapDispatchToProps)(PendingArticlesContainer)