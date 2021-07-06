/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Loading, Paginator, Error } from '../components';
import GameCard from '../components/GameCard';
import api from '../api';

class ListGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
        this.pageSize = 24;
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount() {
        // eslint-disable-next-line import/no-named-as-default-member
        api.getAllGames(0, this.pageSize).then((games) => {
            this.setState({
                games: games.data._embedded.game,
                totalRecords: games.data.page.totalElements,
                pageLimit: games.data.page.size,
                isLoading: false,
            });
        }).catch((error) => {
            this.setState({
                isLoading: false,
                error,
            });
        });
    }

    onPageChanged({ currentPage: pageRequested }) {
        this.setState({ isLoading: true });
        // eslint-disable-next-line import/no-named-as-default-member
        api.getAllGames(pageRequested - 1, this.pageSize).then((games) => {
            this.setState({
                games: games.data._embedded.game,
                isLoading: false,
                error: null,
            });
        }).catch((error) => {
            this.setState({
                isLoading: false,
                error,
            });
        });
    }

    render() {
        const {
            games, isLoading, pageLimit, totalRecords, error,
        } = this.state;

        return (
            <Container>
                {isLoading && <Loading />}
                {error && <Error message={error} />}
                {games && (
                    <Row className="mb-2">
                        {
                            games.map((game) => (
                                <Col lg="4" md="6" className="mb-3" key={game.gameId}>
                                    <GameCard game={game} />
                                </Col>
                            ))
                        }
                    </Row>
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

export default ListGames;
