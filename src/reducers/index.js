import { combineReducers } from 'redux'
import { routerRecuder } from 'react-router-redux'
import customer from  './customerListReducer'
import expandRow from  './expandRowReducer'
import pricesList from  './pricesListReducer'
import article from  './articleReducer'
import deliveryNotes from  './deliveryNotesReducer'
import payments from  './paymentsReducer'

const rootReducer = combineReducers({

  routing: 
    routerRecuder,
    customer,
    expandRow,
    pricesList,
    article,
    deliveryNotes,
    payments

})

export default rootReducer