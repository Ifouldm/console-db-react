import React from 'react';
import { Alert } from 'react-bootstrap';
import PropType from 'prop-types';
import ListGames from './ListGames';
import ListConsoles from './ListConsoles';

const Home = function home() {
    return (
        <>
            <Alert variant="primary"><h1>Consoles</h1></Alert>
            <ListConsoles />
            <Alert variant="primary"><h1>Games</h1></Alert>
            <ListGames />
        </>
    );
};

Home.propTypes = {
    location: PropType.object.isRequired
}

export default Home;
