import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Error, Loading, Paginator } from '../components';
import api from '../api';
import ConsoleCard from '../components/ConsoleCard';
import { AxiosError } from 'axios';
import { ConsoleModel } from '../types';

interface IState {
    isLoading: boolean,
    error: string,
    consoles?: ConsoleModel[],
    totalRecords?: number,
    pageLimit?: number
}

interface IProps {}
class ListConsoles extends Component<IProps, IState> {
    pageSize = 10;
    params = new URLSearchParams();

    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: true,
            error: '',
        };
        this.onPageChanged = this.onPageChanged.bind(this);
        this.params = new URLSearchParams(location.search);
    }

    componentDidMount() {
        // eslint-disable-next-line import/no-named-as-default-member
        api.getAllConsoles(0, this.pageSize, this.params.get('name') || '')
            .then((consoles) => {
                this.setState({
                    consoles: consoles.data._embedded.consoles,
                    totalRecords: consoles.data.page.totalElements,
                    pageLimit: consoles.data.page.size,
                    isLoading: false,
                });
            })
            .catch((err: AxiosError) => {
                this.setState({
                    isLoading: false,
                    error: err.message,
                });
            });
    }

    onPageChanged({ currentPage }: { currentPage: number}) {
        this.setState({ isLoading: true });
        // eslint-disable-next-line import/no-named-as-default-member
        api.getAllConsoles(currentPage - 1, this.pageSize)
            .then((consoles) => {
                this.setState({
                    consoles: consoles.data._embedded.consoles,
                    isLoading: false,
                    error: '',
                });
            })
            .catch((err) => {
                this.setState({
                    isLoading: false,
                    error: err.toString(),
                });
            });
    }

    render() {
        const { error, consoles, isLoading, totalRecords, pageLimit } =
            this.state;

        return (
            <Container>
                {isLoading && <Loading />}
                {error && <Error message={error} />}
                {consoles && (
                    <Container>
                        {consoles.map((consoleData) => (
                            <ConsoleCard
                                consoleData={consoleData}
                                key={consoleData.name}
                            />
                        ))}
                    </Container>
                )}
                {totalRecords && (
                    <Paginator
                        totalRecords={totalRecords}
                        pageLimit={pageLimit}
                        pageNeighbours={1}
                        onPageChanged={this.onPageChanged}
                    />
                )}
            </Container>
        );
    }
}

export default ListConsoles;
