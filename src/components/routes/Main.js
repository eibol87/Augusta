import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CustomersEnterprise from '../customers/CustomersEnterprise.js'
import CustomersParticular from '../customers/CustomersParticular.js'
import PricesList from '../pricesList/PricesList.js'
import Articles from '../articles/Articles.js'
import DeliveryNotes from '../deliveryNotes/DeliveryNotes.js'
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
        <PrivateRoute path="/customers/empresa" component={CustomersEnterprise}/>
        <PrivateRoute path="/customers/particular" component={CustomersParticular}/>
        <PrivateRoute path="/pricesList" component={PricesList}/>
        <PrivateRoute path="/deliveryNotes" component={DeliveryNotes}/>
        <PrivateRoute path="/articles/:state" component={Articles}/>
        <PrivateRoute path="/articles" component={Articles}/>
      </Switch>
    </div>
  )
}

export default Main