import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Clients from './clients/Clients.js'
import Provider from './provider/Provider.js'

const Main = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' />
        <Route path='/clients' component={Clients} />
        <Route path='/provider' component={Provider} />
      </Switch>
    </div>
  )
}

export default Main