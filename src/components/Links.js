import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Links = () => (
    <>
        <Link to="/" className="navbar-brand">
            Console Database
        </Link>
        <Navbar.Collapse>
            <Nav>
                <Nav.Item>
                    <Link to="/console/list" className="nav-link">
                        List Consoles
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/console/add" className="nav-link">
                        Add a Console
                    </Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </>
);

export default Links;
