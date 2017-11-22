import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CustomersEnterprise from '../customers/enterprise/CustomersEnterprise.js'
import CustomersParticularContainer from '../customers/particular/CustomersParticularContainer.js'
import Payments from '../customers/Payments.js'
import PricesList from '../pricesList/PricesList.js'
import Articles from '../articles/Articles.js'
import PendingArticles from '../articles/PendingArticles.js'
import FinalizedArticles from '../articles/FinalizedArticles.js'
import DeliveredArticles from '../articles/DeliveredArticles.js'
import DeliveryNotes from '../deliveryNotes/DeliveryNotes.js'
import Login from '../login/Login.js'
import Logout from '../login/Logout.js'
import PrivateRoute from './PrivateRoute.js'

const Main = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout}  />
        <PrivateRoute path="/customers/empresa" component={CustomersEnterprise}/>
        <PrivateRoute path="/customers/particular" component={CustomersParticularContainer}/>
        <PrivateRoute path="/customers/payments" component={Payments}/>
        <PrivateRoute path="/priceslist" component={PricesList}/>
        <PrivateRoute path="/deliveryNotes" component={DeliveryNotes}/>
        <PrivateRoute path="/findarticles" component={Articles}/>
        <PrivateRoute path="/articles/pending" component={PendingArticles}/>
        <PrivateRoute path="/articles/finalized" component={FinalizedArticles}/>
        <PrivateRoute path="/articles/delivered" component={DeliveredArticles}/>
      </Switch>
    </div>
  )
}

export default Main