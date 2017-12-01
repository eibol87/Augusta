import React, { Component } from 'react';
import { Form, FormGroup, Col,ControlLabel,FormControl,Button } from 'react-bootstrap'
import {checkLogin} from '../../services/Auth'
import  {Redirect} from 'react-router'
import PanelContainer from '../panelContainer/PanelContainer.js'


class Login extends Component{
	constructor(){
		super()
		this.state = {
	    	email:'',
	    	password: '',
	    	login:false
	    }

		this.handleClick = this.handleClick.bind(this)
		this.handleChangeEmail = this.handleChangeEmail.bind(this)
		this.handleChangePassword = this.handleChangePassword.bind(this)
	}

	handleClick(e){
		e.preventDefault()
		checkLogin(this.state.email,this.state.password)
		.then((response) =>( 
			this.setState({login:response})
			))
   	.catch()
	}
	handleChangeEmail(e){
		this.setState(
    { 
    	email:e.target.value 
   	})
	}
	handleChangePassword(e){
		this.setState(
    { 
    	password:e.target.value 
   	})
	}
	render(){
		return (

		<Form horizontal>
		
	    <FormGroup controlId="formHorizontalEmail">
	      <Col componentClass={ControlLabel} sm={2}>
	        Email
	      </Col>
	      <Col sm={4} >
	        <FormControl onChange={this.handleChangeEmail} type="email" name="username" placeholder="Email" />
	      </Col>
	    </FormGroup>
	    <FormGroup controlId="formHorizontalPassword">
	      <Col componentClass={ControlLabel} sm={2}>
	        Password
	      </Col>
	      <Col sm={4}>
	        <FormControl onChange={this.handleChangePassword} type="password" name="password" placeholder="Password" />
	      </Col>
	    </FormGroup>
	    <FormGroup>
	      <Col smOffset={2} sm={10}>
	        <Button type="submit" onClick={this.handleClick}>
	          Sign in
	        </Button>
	      </Col>
	    </FormGroup>
	      {
        this.state.login ? <Redirect to="/articles/add" push /> : ''
      }
      
	  </Form>
  	)
	}
}

export default PanelContainer(Login)