import React from 'react';
import ListGames from './ListGames';
import ListConsoles from './ListConsoles';

const Home = function home() {
    return (
        <>
            <h1>Consoles</h1>
            <ListConsoles />
            <h1>Games</h1>
            <ListGames />
        </>
    );
};

export default Home;
