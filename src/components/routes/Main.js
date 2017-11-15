import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Customers from '../customers/Customers.js'
import Articles from '../articles/Articles.js'
import Orders from '../orders/Orders.js'
import Pending from '../orders/pending/Pending.js'
import Finalized from '../orders/finalized/Finalized.js'
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
        <PrivateRoute path="/articles" component={Articles}/>
        <PrivateRoute path="/orders" component={Orders}/>
        <PrivateRoute path="/ordersByPending" component={Pending}/>
        <PrivateRoute path="/ordersByFinalized" component={Finalized}/>
      </Switch>
    </div>
  )
}

export default Main