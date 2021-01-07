import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Loading } from '../components';
import api from '../api';
import ConsoleCard from '../components/ConsoleCard';

class ListConsoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            consoles: [],
        };
    }

    async componentDidMount() {
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
        if (isLoading) {
            return (<Loading />);
        }
        return (
            <Container>
                {
                    consoles.map((console) => (
                        <ConsoleCard console={console} />
                    ))
                }
            </Container>
        );
    }
}

export default ListConsoles;
