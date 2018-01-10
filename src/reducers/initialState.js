const initialState = {
  customerList:{
    customer:[],
    edited:[],
    loading:false,
    error: null
  },
  expandRow:{
    edited:[]
  },
  pricesList:[{
    id:'',
    type:'',
    leather: '',
    base_price:'',
    prices_per_customer:'',
    edited: []
  }],
}

export default initialState