import { combineReducers } from 'redux'
import { routerRecuder } from 'react-router-redux'
import customer from  './customerListReducer'
import expandRow from  './expandRowReducer'
import pricesList from  './pricesListReducer'
import article from  './articleReducer'

const rootReducer = combineReducers({

  routing: 
    routerRecuder,
    customer,
    expandRow,
    pricesList,
    article

})

export default rootReducer