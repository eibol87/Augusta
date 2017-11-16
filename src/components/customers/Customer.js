import React, { Component } from 'react';
import {getCustomerById} from '../../services/Api'
import {Form,FormGroup,FormControl,Col,ControlLabel,Button} from 'react-bootstrap';
import './Customers.css'
import PanelContainer from '../panelContainer/PanelContainer.js'

class Customer extends Component {
	constructor(){
		super()
		this.state={
			customers:''
		}
		}
		componentDidMount(){
		getCustomerById(this.props.match.params.id)
		.then(response =>
			this.setState(
			{
				customer:response 
			})
		)
	}
	render(){
		return (<div className="customer">
         <Form horizontal>
         	<Col xs={12} sm={6} md={6} lg={6}>
	          <FormGroup controlId="formHorizontalEmail">
	            <Col componentClass={ControlLabel} sm={2}>
	              Email
	            </Col>
	            <Col sm={7}>
	              <FormControl type="email" placeholder="Email" />
	            </Col>
	          </FormGroup>
				  </Col>
				  <Col xs={12} sm={6} md={6} lg={6}>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={7}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>
					 </Col>
         
          <FormGroup>
            <Col smOffset={2} sm={7}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>)
	}

}

export default PanelContainer(Customer)