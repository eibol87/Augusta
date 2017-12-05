import { combineReducers } from 'redux'
import { routerRecuder } from 'react-router-redux'
import customerList from  './customerListReducer'

const rootReducer = combineReducers({
  routing: routerRecuder,
  customerList
})

export default rootReducer