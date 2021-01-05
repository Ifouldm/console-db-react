import React, { Component } from 'react';
import api from './api';

import './App.css';

class ConsoleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            consoles: [],
        };
    }

    async constcomponentDidMount() {
        this.setState({ isLoading: true });

        // eslint-disable-next-line import/no-named-as-default-member
        await api.getAllConsoles().then((consoles) => {
            this.setState({
                consoles: consoles.data.data,
                isLoading: false,
            });
        });
    }

    render() {
        const { consoles, isLoading } = this.state;
        return (
            <div className="consolePanel">
                {
                    consoles.map((console) => (
                        <div className="consoleInfo">
                            <h3>{console.name}</h3>
                            <p>{console.description}</p>
                            <p>{isLoading}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ConsoleList;
