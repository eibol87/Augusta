import React from 'react';
import ReactDOM from 'react-dom';

class MySearchField extends React.Component {
  constructor(){
    super()
    this.state={
      value:'',
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
  handleKeyPress(target) {
    if(target.charCode === 13){
      alert('Enter clicked!!!'); 
       this.setState({
        value:''
       })
       return "has entrado"
  }}
  render() {
    return (
        <input
          className={ `form-control` }
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
          autoFocus={true}
          onKeyPress={this.handleKeyPress}
          defaultValue={ this.state.value }
          placeholder={this.props.placeholder || this.state.placeholder }
          onKeyUp={ this.props.search }/>
      
    )
  }
}

export default MySearchField