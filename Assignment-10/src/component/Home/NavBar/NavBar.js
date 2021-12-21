import React from 'react';
import {  Badge, Container,  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'



const NavBar = () => {
  const {user,signOutt} = useAuth()
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#"><h1>MetroLab <Badge bg="secondary">Solution</Badge></h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contuct">Contact</Nav.Link>
        <Nav.Link>
        <Badge bg="danger" text="dark">
        {user?.displayName || 'empty user'}
        </Badge>
        </Nav.Link>
        <img style={{height:'50px',width:'50px',borderRadius:'50px'}} src={user.photoURL || 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'} alt="" />
        {
          user.email ? <Nav.Link as={Link} onClick={signOutt} to="/log">Log out</Nav.Link> : <Nav.Link as={Link} to="/log">Log in</Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavBar;