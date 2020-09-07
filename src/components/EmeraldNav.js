import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../media/logo_with_sidetext.png';

const EmeraldNav = (props) =>  {

    return (
        <div>
        <Navbar bg="light" expand="sm" fixed="top">
            <Navbar.Brand href="#home">
            <img src = {logo} width = "15%" alt = "Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav.Link className="ml-auto"/>
                        <Nav.Link  href="#HOME">Home</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
        </div>

    );
  }


export default EmeraldNav;