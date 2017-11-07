import React from 'react';
import {Navbar,Nav,NavDropdown,MenuItem} from 'react-bootstrap';
import './Header.css'
import data from '../../api/menu.json'


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
      {data.map((menu) => {
         return (
              <NavDropdown eventKey={menu.id} title={menu.category} id={menu.category}>
                {menu.items.map((items) =>
                   <MenuItem href={items.link} eventKey={menu.id}>{items.title}</MenuItem>
                  )}
              </NavDropdown>
        )
      })}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )

export default Header