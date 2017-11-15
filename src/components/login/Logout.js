import React  from 'react';
import { Form, FormGroup, Col,ControlLabel,FormControl,Button } from 'react-bootstrap'
import {removeSessionStorage} from '../../services/LocalStorage'
import  {Redirect} from 'react-router'


const Logout = () => {
	removeSessionStorage()
	return(
		<Redirect to="/login" push />
		)
	}	

export default Logout