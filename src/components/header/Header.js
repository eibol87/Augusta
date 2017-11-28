import React from 'react';
import {Navbar,Nav,NavDropdown,MenuItem} from 'react-bootstrap';
import './Header.css'
import data from '../menu/menu.json'

const Header = () => (
  <Navbar inverse collapseOnSelect className="Header--Navbar">
    <Navbar.Header>
      <Navbar.Brand> 
        <a href="/">Augusta</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav className="Header--Nav--showMenu">
      {
        data.map((menu, index) => {
        return (
          <NavDropdown key={index} eventKey={index} title={menu.category} id={index}>
            {
              menu.items.map((items) =>
               <MenuItem key={items.id}  href={items.link} eventKey={items.id}>{items.title}</MenuItem>
              )
          }
          </NavDropdown>
        )
        })
    }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header