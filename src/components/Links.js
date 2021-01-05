import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``;

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``;

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``;

const Links = () => (
    <>
        <Link to="/" className="navbar-brand">
            Console Database
        </Link>
        <Collapse>
            <List>
                <Item>
                    <Link to="/console/list" className="nav-link">
                        List Consoles
                    </Link>
                </Item>
                <Item>
                    <Link to="/console/add" className="nav-link">
                        Add a Console
                    </Link>
                </Item>
            </List>
        </Collapse>
    </>
);

export default Links;
