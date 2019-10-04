import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';

export default function Header({ isUserAuthenticated, authCallback }) {

  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Link to="/"><Navbar.Brand>One Anime</Navbar.Brand></Link>
      <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
    </Nav>
        <Nav>
          <Nav.Link onClick={ authCallback }>{
            isUserAuthenticated ? 'Logout' : 'Login'
          }</Nav.Link>
        </Nav>
    </Navbar>
  );
}