import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Customers from './customers/Customers.js'

const Main = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' />
        <Route path='/customers' render={() => (<Customers />)} />
      </Switch>
    </div>
  )
}

export default Main