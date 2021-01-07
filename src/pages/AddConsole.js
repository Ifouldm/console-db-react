import React, { Component } from 'react';
import {
    Card, Form, Button, Alert,
} from 'react-bootstrap';
import { insertConsole } from '../api';

class AddConsole extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
        };
    }

    handleChangeInputName = (event) => {
        const name = event.target.value;
        this.setState({ name });
    }

    handleChangeInputDescription = (event) => {
        const description = event.target.value;
        this.setState({ description });
    }

    handleAddMovie = async () => {
        const { name, description } = this.state;
        const payload = { name, description };

        await insertConsole(payload).then(() => {
            // eslint-disable-next-line no-alert
            window.alert('Console inserted successfully');
            this.setState({
                name: '',
                description: '',
            });
        }).catch((error) => console.error(error));
    }

    render() {
        const { name, description } = this.state;
        return (
            <Card>
                <Form>
                    <Card.Title>
                        <Alert variant="primary">Create Console</Alert>
                    </Card.Title>
                    <Card.Body>
                        <Form.Group>
                            <Form.Label>Name: </Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={this.handleChangeInputName}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description: </Form.Label>
                            <Form.Control
                                type="text"
                                value={description}
                                onChange={this.handleChangeInputDescription}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Button onClick={this.handleAddMovie}>Add Console</Button>
                            {' '}
                            <Button href="/console/list">Cancel</Button>
                        </Form.Group>
                    </Card.Body>
                </Form>
            </Card>
        );
    }
}

export default AddConsole;
