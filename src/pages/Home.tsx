import React from 'react';
import { Alert } from 'react-bootstrap';
import PropType from 'prop-types';
import ListGames from './ListGames';
import ListConsoles from './ListConsoles';

const Home =({ location }) => {
    (
        <>
            <Alert variant="primary"><h1>Consoles</h1></Alert>
            <ListConsoles location={location} />
            <Alert variant="primary"><h1>Games</h1></Alert>
            <ListGames />
        </>
    );
};

Home.propTypes = {
    location: PropType.string.isRequired
}

export default Home;
