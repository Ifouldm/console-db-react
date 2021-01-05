import React, { Component } from 'react';
import styled from 'styled-components';
import { Loading, Button } from '../components';
import api from '../api';

const Card = styled.div.attrs({
    className: 'card',
})``;

const CardTitle = styled.div.attrs({
    className: 'card-title',
})``;

const CardDescription = styled.div.attrs({
    className: 'card-text',
})``;

const Container = styled.div.attrs({
    className: 'container',
})``;

const CardBody = styled.div.attrs({
    className: 'card-body',
})``;

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
                        <Card key={console.name}>
                            <CardTitle>{console.name}</CardTitle>
                            <CardBody>
                                <CardDescription>{console.description}</CardDescription>
                                <Button type="edit" link={`/console/update/${console._id}`} />
                                <Button type="delete" link={`/console/delete/${console._id}`} />
                            </CardBody>
                        </Card>
                    ))
                }
            </Container>
        );
    }
}

export default ListConsoles;
