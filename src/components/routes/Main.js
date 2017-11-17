import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Customers from '../customers/Customers.js'
import Customer from '../customers/Customer.js'
import PricesList from '../pricesList/PricesList.js'
import Articles from '../articles/Articles.js'
import Orders from '../articles/Orders.js'
import Login from '../login/Login.js'
import Logout from '../login/Logout.js'
import PrivateRoute from './PrivateRoute.js'
import Table from '../forms/Table.js'

const Main = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' />
        <Route path='/login' render={() => (<Login />)} />
          <Route path='/tabla' render={() => (<Table />)} />
        <Route path='/logout' render={() => (<Logout />)} />
        <PrivateRoute path="/customers" component={Customers}/>
        <PrivateRoute path="/customer/:id" component={Customer}/>
        <PrivateRoute path="/pricesList" component={PricesList}/>
        <PrivateRoute path="/orders" component={Orders}/>
        <PrivateRoute path="/articles/:state" component={Articles}/>
        <PrivateRoute path="/articles" component={Articles}/>
      </Switch>
    </div>
  )
}

export default Main