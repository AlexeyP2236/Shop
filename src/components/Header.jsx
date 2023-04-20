import "../App.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} id="shop">
              Shop of masters
            </Link>
          </Navbar.Brand>
          <Nav className="d-flex">
            <Nav.Link as={Link} to={'/'}>
              Главная
            </Nav.Link>
            <Nav.Link as={Link} to={'/cart'}>
              Корзина
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header