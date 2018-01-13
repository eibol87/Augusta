import { combineReducers } from 'redux'
import { routerRecuder } from 'react-router-redux'
import customer from  './customerListReducer'
import expandRow from  './expandRowReducer'
import pricesList from  './pricesListReducer'
import article from  './articleReducer'
import deliveryNotes from  './deliveryNotesReducer'

const rootReducer = combineReducers({

  routing: 
    routerRecuder,
    customer,
    expandRow,
    pricesList,
    article,
    deliveryNotes

})

export default rootReducer