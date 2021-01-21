import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Loading, Paginator } from '../components';
import api from '../api';
import ConsoleCard from '../components/ConsoleCard';

class ListConsoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            totalRecords: 0,
            pageLimit: 20,
            consoles: [],
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        // eslint-disable-next-line import/no-named-as-default-member
        await api.getAllConsoles().then((consoles) => {
            this.setState({
                consoles: consoles.data._embedded.consoles,
                totalRecords: consoles.data.page.totalElements,
                pageLimit: consoles.data.page.size,
                isLoading: false,
            });
        });
    }

    render() {
        const {
            consoles, isLoading, totalRecords, pageLimit,
        } = this.state;
        if (isLoading) {
            return (<Loading />);
        }
        return (
            <>
                <Container>
                    {
                        consoles.map((consoleData) => (
                            <ConsoleCard consoleData={consoleData} key={consoleData.name} />
                        ))
                    }
                </Container>
                <Paginator
                    totalRecords={totalRecords}
                    pageLimit={pageLimit}
                    pageNeighbours={1}
                    onPageChanged={this.onPageChanged}
                />
            </>
        );
    }
}

export default ListConsoles;
