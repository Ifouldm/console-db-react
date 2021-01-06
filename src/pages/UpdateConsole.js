import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { updateConsoleById, getConsoleById } from '../api';

class UpdateConsole extends Component {
    constructor(props) {
        super(props);

        // eslint-disable-next-line react/prop-types
        const { id } = props.match.params;

        this.state = {
            id,
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

    handleUpdateConsole = async () => {
        const { id, name, description } = this.state;
        const payload = { name, description };

        await updateConsoleById(id, payload).then(() => {
            // eslint-disable-next-line no-alert
            window.alert('Console updated successfully');
            this.setState({
                id: '',
                name: '',
                description: '',
            });
        }).catch((error) => console.error(error));
    }

    componentDidMount = async () => {
        const { id } = this.state;
        const console = await getConsoleById(id);

        this.setState({
            name: console.data.data.name,
            description: console.data.data.description,
        });
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
                <Button onClick={this.handleUpdateConsole}>Update Console</Button>
                <Button href="/console/list">Cancel</Button>
            </Form>
        );
    }
}

export default UpdateConsole;
