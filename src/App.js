import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './components/routes/Main'
import Menu from './components/menu/Menu'
import Header from './components/header/Header'
import { Grid, Col } from 'react-bootstrap'
import './App.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
    	<Grid bsClass="false">
        <Header />
          <Col className="nopadding App--menu--left" xs={2} sm={2} md={2} lg={2}>
            <Menu />
          </Col>
          <Col className="nopadding background" xs={12} sm={10} md={10} lg={10}>
    	    		<Main />
    	    </Col>
      </Grid>
     </BrowserRouter>
    );
  }
}

export default App;
