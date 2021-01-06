import React from 'react';
import { Navbar } from 'react-bootstrap';

import logo from '../obidex.svg';

const Logo = () => (
    <Navbar.Brand href="http://obidex.com">
        <img src={logo} width="50" height="50" alt="obidex.com" />
    </Navbar.Brand>
);

export default Logo;
