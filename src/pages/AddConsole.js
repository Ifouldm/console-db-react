import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
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
            <Form>
                <Alert>Create Console</Alert>

                <Form.Label>Name: </Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                <Form.Label>Description: </Form.Label>
                <Form.Control
                    type="text"
                    value={description}
                    onChange={this.handleChangeInputDescription}
                />
                <Button onClick={this.handleAddMovie}>Add Console</Button>
                <Button href="/console/list">Cancel</Button>
            </Form>
        );
    }
}

export default AddConsole;
