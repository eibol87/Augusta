import React from 'react';
import ReactDOM from 'react-dom';
import toastr from 'toastr'

class MySearchField extends React.Component {
  constructor(){
    super()
    this.state={
      value:'',
      data:'',
      placeholder:'código de barras'
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
      if(this.props.handleKeyPress){
        if(this.props.data.length === 1 &&  this.state.value.length > 0){
          const id = this.props.data[0].id
          this.props.handleKeyPress(id)
          this.props.resetState()
        }else{
          toastr.warning(`Solo puede haber un resultado en la búsqueda`)
        }
        this.setState({ value:''})
      } else{
         return false
      }
    }
  }
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
        placeholder={this.state.placeholder }
        onKeyUp={ this.props.search }
      />
    )
  }
}

export default MySearchField