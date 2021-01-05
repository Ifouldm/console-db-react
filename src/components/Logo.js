import React from 'react';
import styled from 'styled-components';

import logo from '../obidex.svg';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``;

const Logo = () => (
    <Wrapper href="http://obidex.com">
        <img src={logo} width="50" height="50" alt="obidex.com" />
    </Wrapper>
);

export default Logo;
