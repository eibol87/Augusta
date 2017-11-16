import React  from 'react';
import {removeSessionStorage} from '../../services/LocalStorage'
import  {Redirect} from 'react-router'


const Logout = () => {
	removeSessionStorage()
	return(
		<Redirect to="/login" push />
		)
	}	

export default Logout