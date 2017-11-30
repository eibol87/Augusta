import React, { Component } from 'react';
import {getListArticleType} from '../../services/Api'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
let number = 1
class PricesListModal extends Component {
  constructor(){
    super()
    this.state={
      type:'',
      leather:'',
      selectedOption:{value:'',label:''},
      selectedOptionLeather:{value:'',label:''},
      selectedOptionType:{value:'',label:''}
    }}

  getFieldValue() {
    const newRow = {};
    this.props.columns.forEach((column, i) => {
      newRow[column.field] = this.refs[column.field].value;
    }, this);
    return newRow;}

  async getData(){
    let type = await getListArticleType('type')
    let leather = await getListArticleType('leather')
    type = type.map((value) =>({value:value, label:value}))
    leather = leather.map((value) =>({value:value, label:value}))
    
    this.setState({
      type:type,
      leather:leather 
    })}
  componentDidMount(){
    this.getData()
  }
  handleChange = (selectedOption,type) => {
    if(type === 'type'){
      const selectedOptionType = selectedOption
      this.setState({ selectedOptionType });
      console.log(`Selected: ${selectedOptionType.label}`);
    }else if(type === 'leather'){
      const selectedOptionLeather = selectedOption
      this.setState({ selectedOptionLeather });
      console.log(`Selected: ${selectedOptionLeather.label}`);
    }else{
      this.setState({ selectedOption });
      console.log(`Selected: ${selectedOption.label}`);
    }
  }  
  render() {
    const { validateState } = this.props;
    return (
      <div className='modal-body'>
        <div>
          <label>Tipos ya creados</label>
            <Select
              name="type"
              value={this.state.selectedOptionType}
              onChange={(e) => this.handleChange(e,"type")}
              clearable={false}
              searchable={true}
              options={this.state.type}/>
     
          <label>Categorías ya creadas</label>
            <Select
              name="leather"
              value={this.state.selectedOptionLeather}
              onChange={(e) => this.handleChange(e,"leather")}
              clearable={false}
              searchable={true}
              options={this.state.leather}/>
          {
            this.props.columns.map((column, i) => {
              const {field, name, hiddenOnInsert} = column;
              if (hiddenOnInsert) {
                // when you want same auto generate value
                // and not allow edit, for example ID field
                return  <input type="hidden" ref={column.field} value={number++}/>;
              }
              const error = validateState[field] ?
                (<span className='help-block bg-danger'>{ validateState[field] }</span>) :
                null;
              if(field === 'type' ){
                return (
                  <div key={ field }>
                    <label>{ name }</label>
                    <input
                      className="form-control" 
                      ref={field} 
                      type='text' 
                      onChange={(e) => this.handleChange(e,field)} 
                      value={this.state.selectedOptionType.label} />
                      { error }
                  </div>
                )
              }else if(field === 'leather'){
                return (
                  <div key={ field }>
                    <label>{ name }</label>
                    <input
                      className="form-control" 
                      ref={field} 
                      type='text' 
                      onChange={(e) => this.handleChange(e,field)} 
                      value={this.state.selectedOptionLeather.label} />
                      { error }
                  </div>
                )
              }else{
                return (
                  <div key={ field }>
                    <label>{ name }</label>
                    <input
                      className="form-control" 
                      ref={field} 
                      type='text' 
                      onChange={(e) => this.handleChange(e,field)} 
                      value={this.state.selectedOption.label} />
                      { error }
                  </div>
                )
              }
            })
          }
        </div>
        
      </div>
    );
  }
}

export default PricesListModal