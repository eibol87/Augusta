import { combineReducers } from 'redux'
import { routerRecuder } from 'react-router-redux'
import customerList from  './customerListReducer'
import expandRow from  './expandRowReducer'

const rootReducer = combineReducers({
  routing: routerRecuder,
  customerList,
  expandRow
})

export default rootReducer