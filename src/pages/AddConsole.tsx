import React, { ChangeEventHandler, Component, FormEvent, SyntheticEvent } from 'react';
import {
    Card, Form, Button, Alert,
} from 'react-bootstrap';
import { insertConsole } from '../api';

interface IProps {}
interface IState {
    name: string,
    description: string,
}
class AddConsole extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
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

    handleAddConsole = async () => {
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
                            <Button onClick={this.handleAddConsole}>Add Console</Button>
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
