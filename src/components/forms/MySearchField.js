import React from 'react';
import ReactDOM from 'react-dom';
import toastr from 'toastr'
import { UpdateStateArticle } from '../../services/Api'

class MySearchField extends React.Component {
  constructor(){
    super()
    this.state={
      value:'',
      data:'',
      placeholder:'buscame'
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  // It's necessary to implement getValue
  getValue() {

    return ReactDOM.findDOMNode(this).value;}
  // It's necessary to implement setValue
  setValue(value) {

    ReactDOM.findDOMNode(this).value = value;}
  handleChange(e) {
    this.setState({
      value:e.target.value
    })
  }
  async handleKeyPress(target) {
    //if press enter
    if(target.charCode === 13){
      const id = this.props.data[0].id
      const result = await UpdateStateArticle(id,'finalized')
      if(result === 200){
        toastr.success(`Se ha finalizado la prenda ${result.barcode}`)
      } 
      this.props.forceRender()
      this.setState({ value:''})
  }}
  componentWillReceiveProps(nextProps){
    this.setState({ data:this.props.data})
  }
  render() {
    return (
      <input
        className={ `form-control` }
        type='text'
        value={this.state.value}
        onChange={this.handleChange}
        autoFocus={true}
        onKeyPress={this.handleKeyPress}
        placeholder={this.props.placeholder || this.state.placeholder }
        onKeyUp={ this.props.search }
      />
    )
  }
}

export default MySearchField