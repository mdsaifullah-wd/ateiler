import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ProductNavigation from '../ProductNagivation/ProductNavigation';
import logo from './../../../images/logo/logo.png';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src={logo}
              width='80'
              className='d-inline-block align-top'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>
                <Link to='/'>Home</Link>
              </Nav.Link>
              <NavDropdown title='Products' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Women</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Men</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Kids</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to='products'>All Products</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#pricing'>Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>More deets</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
