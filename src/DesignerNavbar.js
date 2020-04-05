import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

import Home from "./Home";
import Acerca from "./Productos";
import Contact from "./Contact";

const designerNavbar = (props) => {
  return (
    <HashRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="https://www.artistichat.com">Artistichat</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link as={NavLink} to='/'>Principal</Nav.Link>
              <Nav.Link as={NavLink} to='/Productos'>Productos</Nav.Link>
              <Nav.Link as={NavLink} to='/Contact'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/Productos" component={Acerca} />
        <Route path="/Contact" component={Contact} />
      </div>
    </HashRouter>
  );
}


export default designerNavbar;
