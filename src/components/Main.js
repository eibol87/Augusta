import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Customers from './customers/Customers.js'
import Login from './login/Login.js'

const Main = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' />
        <Route path='/customers' render={() => (<Customers />)} />
        <Route path='/login' render={() => (<Login />)} />
      </Switch>
    </div>
  )
}

export default Main