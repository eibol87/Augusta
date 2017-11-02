import React from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import data from '../../api/menu.json'

import './Header.css'

const Header = () => (
 <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Augusta</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
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