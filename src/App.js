import React from 'react';
import {
    BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import {
    ListConsoles, ListGames, UpdateConsole, AddConsole, DeleteConsole, Home,
} from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/console/list" exact component={ListConsoles} />
                    <Route path="/console/add" exact component={AddConsole} />
                    <Route path="/game/list" exact component={ListGames} />
                    <Route path="/console/delete/:id" exact component={DeleteConsole} />
                    <Route path="/console/update/:id" exact component={UpdateConsole} />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
