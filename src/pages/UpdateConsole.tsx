import React, { Component, SyntheticEvent } from 'react';
import {
    Card, Form, Button, Alert,
} from 'react-bootstrap';
import { updateConsoleById, getConsoleById } from '../api';

interface IProps {}

interface IState {
    id: string,
    name: string,
    description: string,
}
class UpdateConsole extends Component<IProps, IState> {
    constructor(props: {match: {params: {id: string}}}) {
        super(props);

        // eslint-disable-next-line react/prop-types
        const { id } = props.match.params;

        this.state = {
            id,
            name: '',
            description: '',
        };
    }

    handleChangeInputName = (event: SyntheticEvent) => {
        const target = event.target as typeof event.target & {
            value: string
        };
        const name = target.value;
        this.setState({ name });
    }

    handleChangeInputDescription = (event: SyntheticEvent) => {
        const target = event.target as typeof event.target & {
            value: string
        };
        const description = target.value;
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
            <Card>
                <Form>
                    <Card.Title>
                        <Alert variant="primary">Update Console</Alert>
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
                            <Button onClick={this.handleUpdateConsole}>Update Console</Button>
                            {' '}
                            <Button href="/console/list">Cancel</Button>
                        </Form.Group>
                    </Card.Body>
                </Form>
            </Card>
        );
    }
}

export default UpdateConsole;
