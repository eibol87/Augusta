import React from 'react';
import { Switch, Route } from 'react-router'
import CustomersEnterpriseContainer from '../customers/enterprise/CustomersEnterpriseContainer.js'
import CustomersParticularContainer from '../customers/particular/CustomersParticularContainer.js'
import PaymentsContainer from '../customers/payments/PaymentsContainer.js'
import PricesListContainer from '../pricesList/PricesListContainer.js'
import ArticlesContainer from '../articles/allArticles/ArticlesContainer.js'
import AddArticlesContainer from '../articles/addArticles/AddArticlesContainer.js'
import PendingArticlesContainer from '../articles/pendingArticles/PendingArticlesContainer.js'
import FinalizedArticlesContainer from '../articles/finalizedArticles/FinalizedArticlesContainer.js'
import DeliveredArticlesContainer from '../articles/deliveredArticles/DeliveredArticlesContainer.js'
import DeliveryNotesContainer from '../deliveryNotes/DeliveryNotesContainer.js'
import Login from '../login/Login.js'
import Logout from '../login/Logout.js'
import PrivateRoute from './PrivateRoute.js'

const Main = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout}  />
        <PrivateRoute path="/customers/empresa" component={CustomersEnterpriseContainer}/>
        <PrivateRoute path="/customers/particular" component={CustomersParticularContainer}/>
        <PrivateRoute path="/customers/payments" component={PaymentsContainer}/>
        <PrivateRoute path="/priceslist" component={PricesListContainer}/>
        <PrivateRoute path="/deliveryNotes" component={DeliveryNotesContainer}/>
        <PrivateRoute path="/articles/add" component={AddArticlesContainer}/>
        <PrivateRoute path="/articles/all" component={ArticlesContainer}/>
        <PrivateRoute path="/articles/pending" component={PendingArticlesContainer}/>
        <PrivateRoute path="/articles/finalized" component={FinalizedArticlesContainer}/>
        <PrivateRoute path="/articles/delivered" component={DeliveredArticlesContainer}/>
      </Switch>
    </div>
  )
}

export default Main