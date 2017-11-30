import React, { Component } from 'react';
import AddArticles from './AddArticles'

class AddArticlesContainer extends Component {
  constructor(){
    super()
    this.state={
      articles:[]
    }
  }
  render(){
    return <AddArticles/>
  }

}

export default AddArticlesContainer