import { combineReducers } from 'redux'
import { routerRecuder } from 'react-router-redux'
import customerList from  './customerListReducer'
import expandRow from  './expandRowReducer'
import pricesList from  './pricesListReducer'

const rootReducer = combineReducers({

  routing: 
    routerRecuder,
    customerList,
    expandRow,
    pricesList

})

export default rootReducer