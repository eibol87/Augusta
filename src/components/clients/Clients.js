import React, { Component } from 'react';
import {Form,FormGroup,ControlLabel,FormControl,Checkbox,Button,Col} from 'react-bootstrap';
import './Clients.css'


class Clients extends Component {

  render(){
    return(
      <div className="Clients">
         <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={1}>
              Email
            </Col>
            <Col sm={5}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={1}>
              Password
            </Col>
            <Col sm={5}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={1} sm={5}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={1} sm={5}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
      
      )
  }
}


export default Clients