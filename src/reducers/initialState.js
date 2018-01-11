const initialState = {
  customer:{
    list:[],
    edited:[],
    loading:false,
    error: null
  },
  expandRow:{
    edited:[]
  },
  pricesList:{
    list:[],
    edited: []
  },
  article:{
    list:[],
    states:{
      pending: 'pending',
      finalized: 'finalized',
      delivered: 'delivered'
    }
  }
}

export default initialState