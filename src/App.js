import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import { Grid, Row, Col } from 'react-bootstrap'
import './App.css'


class App extends Component {
  render() {
    return (
    	<Grid bsClass="false">
        <Header />
        <Row>
          <Col xs={3} sm={3} md={3} lg={3}>
            <Menu />
          </Col>
          <Col xs={9} sm={9} md={9} lg={9}>
    	    	<BrowserRouter>
    	    		<Main />
    	     	</BrowserRouter>
          </Col>
        </Row>
	    </Grid>
    );
  }
}

export default App;
