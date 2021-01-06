import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Logo from './Logo';
import Links from './Links';

const NavBar = () => (
    <Container>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Logo />
            <Links />
        </Navbar>
    </Container>
);

export default NavBar;
