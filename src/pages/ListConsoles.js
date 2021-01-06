import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import { IconButton, Loading } from '../components';
import api from '../api';

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
                        <Card key={console._id}>
                            <Card.Title>{console.name}</Card.Title>
                            <Card.Body>
                                <Card.Text>{console.description}</Card.Text>
                                <IconButton type="edit" link={`/console/update/${console._id}`} />
                                <IconButton type="delete" link={`/console/delete/${console._id}`} />
                            </Card.Body>
                        </Card>
                    ))
                }
            </Container>
        );
    }
}

export default ListConsoles;
