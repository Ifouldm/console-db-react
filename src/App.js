import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import {
    ListConsoles, UpdateConsole, AddConsole, DeleteConsole,
} from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/console/list" exact component={ListConsoles} />
                <Route path="/console/add" exact component={AddConsole} />
                <Route path="/console/delete/:id" exact component={DeleteConsole} />
                <Route path="/console/update/:id" exact component={UpdateConsole} />
            </Switch>
        </Router>
    );
}

export default App;
