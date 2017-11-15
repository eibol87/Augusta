import React from 'react';
import {Redirect, Route} from 'react-router'
import {getSessionStorage} from '../../services/LocalStorage'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getSessionStorage() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/orders',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute