import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Customers from '../customers/Customers.js'
import Login from '../login/Login.js'
import Logout from '../login/Logout.js'
import PrivateRoute from './PrivateRoute.js'

const Main = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' />
        <Route path='/login' render={() => (<Login />)} />
        <Route path='/logout' render={() => (<Logout />)} />
        <PrivateRoute path="/customers" component={Customers}/>
      </Switch>
    </div>
  )
}

export default Main