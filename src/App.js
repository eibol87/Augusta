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
          <Col className="App--menu--left" xs={2} sm={2} md={2} lg={2}>
            <Menu />
          </Col>
          <Col xs={12} sm={10} md={10} lg={10}>
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
