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
    edited: [],
    loading:false
  },
  article:{
    list:[],
    loading:false,
    states:{
      pending: 'pending',
      finalized: 'finalized',
      delivered: 'delivered'
    }
  },
  deliveryNotes:{
     list:[],
     loading:false
  }
}

export default initialState