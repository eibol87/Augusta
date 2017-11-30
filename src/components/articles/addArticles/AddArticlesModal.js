import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
let number = 1
class AddArticlesModal extends Component {
  constructor(){
    super()
    this.state={
      type:'',
      leather:'',
      customers:'',
      colors:'',
      price:false,
      complements:'',
      selectedOption:{value:'',label:''},
      selectedOptionLeather:false,
      selectedOptionType:false,
      selectedOptionCustomers:{value:'',label:''},
      selectedOptionColors:{value:'',label:''},
      selectedOptionComplements:{value:'',label:''},
      selectedOptionPrice:{value:'',label:''}
    }}
  
  getFieldValue() {
    const newRow = {};
    this.props.columns.forEach((column, i) => {
      newRow[column.field] = this.refs[column.field].value;
    }, this);
    return newRow;}
  async getData(){
    const type = await this.props.getListArticle('type')
    const leather = await this.props.getListArticle('leather')
    const customers = await this.props.getListCustomers()
    const colors = await this.props.getColors()
    const complements = await this.props.getComplements()
    this.setState({
      type:type,
      leather:leather,
      customers:customers,
      colors:colors,
      complements:complements
    })}
  componentDidMount(){
    this.getData()}
  handleChange = async (selectedOption,type) => {
    if(type === 'type'){
      const selectedOptionType = selectedOption
      this.setState({ selectedOptionType});
      const price = await this.getPrice()
      await this.setState({ selectedOptionPrice:{value:price,label:price}})
    } else if(type === 'leather'){
      const selectedOptionLeather = selectedOption
      await this.setState({ selectedOptionLeather});
      const price = await this.getPrice()
      this.setState({ selectedOptionPrice:{value:price,label:price}})
    } else if(type === 'customers'){
      const selectedOptionCustomers = selectedOption
      this.setState({ selectedOptionCustomers });
    }else if(type === 'colors'){
      const selectedOptionColors = selectedOption
      this.setState({ selectedOptionColors });
    }else if(type === 'price'){
      const selectedOptionPrice = selectedOption
      this.setState({ selectedOptionPrice });
    }else if(type === 'complements'){
      const selectedOptionComplements = selectedOption
      this.setState({ selectedOptionComplements });
    }else{
      this.setState({ selectedOption });
    }
  }  
   getPrice= async () =>{
    const typeState = this.state.selectedOptionType
    const leatherState = this.state.selectedOptionLeather
    console.log("get:",typeState,leatherState)
    if(typeState && leatherState){
    console.log("ENTRO:",typeState,leatherState)
      const price = await this.props.getPriceArticle(typeState,leatherState)
      return price
    }else{
      return false
    }

  }
  render() {
    const { validateState } = this.props;
    return (
      <div className='modal-body'>
        <div>
         <label>Clientes</label>
          <Select
              name="customers"
              autoFocus
              value={this.state.selectedOptionCustomers}
              onChange={(e) => this.handleChange(e,"customers")}
              clearable={false}
              searchable={true}
              options={this.state.customers}/>
          <label>Tipo</label>
            <Select
              name="type"
              value={this.state.selectedOptionType}
              onChange={(e) => this.handleChange(e,"type")}
              clearable={true}
              searchable={true}
              options={this.state.type}/>
     
          <label>Categorías</label>
            <Select
              name="leather"
              value={this.state.selectedOptionLeather}
              onChange={(e) => this.handleChange(e,"leather")}
              clearable={false}
              searchable={true}
              options={this.state.leather}/>
          <label>Colores</label>
            <Select
              name="colors"
              value={this.state.selectedOptionColors}
              onChange={(e) => this.handleChange(e,"colors")}
              clearable={false}
              searchable={true}
              options={this.state.colors}/>
          <label>Complementos</label>
            <Select
              name="complements"
              value={this.state.selectedOptionComplements}
              onChange={(e) => this.handleChange(e,"complements")}
              clearable={false}
              searchable={true}
              options={this.state.complements}/>
         
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
                if(field == 'price'){
                  return (
                    <div key={ field }>
                      <label>{ name }</label>
                      <input
                        className="form-control" 
                        ref={field} 
                        type='text' 
                        onChange={(e) => this.handleChange(e,field)} 
                        value={this.state.selectedOptionPrice.label} />
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

export default AddArticlesModal