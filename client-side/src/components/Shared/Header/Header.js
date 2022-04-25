import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './../../../images/logo/logo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        className='position-sticky sticky-top'>
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
              <Nav.Link className='position-relative'>
                <div className='position-absolute bg-danger rounded-circle cart-icon'>
                  <p>0</p>
                </div>
                <Link to='/cart'>
                  <AiOutlineShoppingCart className='h2 text-white' />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
