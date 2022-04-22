import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductNavigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='info' variant='light'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav1'>
            <Nav className='mx-auto'>
              {/* All */}
              <Nav.Link>
                <Link to='/products'>All</Link>
              </Nav.Link>

              {/* Women */}
              <NavDropdown title='Women' id='collasible-nav-dropdown1'>
                <NavDropdown.Item>
                  <Link to={'product/women'}>All Women Products</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.1'>Saree</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Shalwar Kameez
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Three pieces
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Shoes</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Mask</NavDropdown.Item>
              </NavDropdown>

              {/* Men */}
              <NavDropdown title='Men' id='collasible-nav-dropdown1'>
                <Link to={'product/men'}>All Men Products</Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.1'>Shirt</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Pants</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Shoe</NavDropdown.Item>
              </NavDropdown>

              {/* Kids */}
              <NavDropdown title='Kids' id='collasible-nav-dropdown1'>
                <Link to={'product/kids'}>All Kids Products</Link>

                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.1'>Shirt</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Pants</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Shoe</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ProductNavigation;
