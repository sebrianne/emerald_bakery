import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../css/EmeraldNav.css';
import logo from '../../media/logo_with_sidetext.png';

const EmeraldNav = (props) =>  {

    return (
        <div>
        <Navbar className = "color-nav" expand="sm" position="relative">
            <Navbar.Brand>
            <a href="/"><img classname = "logo" src = {logo} width = "30%" alt = "Logo"/></a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav.Link className="ml-auto"/>
                        <Nav.Link className = "nav-link" href="/">HOME</Nav.Link>
                        <Nav.Link className="dropbtn"  href="/bakery">BAKERY</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
        </div>

    );
  }


export default EmeraldNav;