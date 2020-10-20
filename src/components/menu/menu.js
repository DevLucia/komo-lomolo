import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import './menu.css';

export default function Menu () {

    return (
      <div className="menu">
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">KOMO LOMOLO</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Camisetas</Nav.Link>
          <Nav.Link href="#pricing">Sudadera</Nav.Link>
          <Nav.Link href="#pricing">Arte</Nav.Link>
        </Nav>
        <Nav inline='true'>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
      </Navbar>
      </div>
      
    );
  }