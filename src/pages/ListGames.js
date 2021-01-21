/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Loading, Paginator, Error } from '../components';
import GameCard from '../components/GameCard';
import api from '../api';

class ListGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            // totalRecords: 10,
            // pageLimit: 20,
            // games: [],
        };
    }

    async componentDidMount() {
        // eslint-disable-next-line import/no-named-as-default-member
        await api.getAllGames().then((games) => {
            this.setState({
                games: games.data._embedded.game,
                totalRecords: games.data.page.totalElements,
                pageLimit: games.data.page.size,
                isLoading: false,
                error: null,
            });
        }).catch((error) => {
            this.setState({
                error,
            });
        });
    }

    onPageChanged = async ({ currentPage: pageRequested }) => {
        this.setState({ isLoading: false });
        // eslint-disable-next-line import/no-named-as-default-member
        await api.getAllGames(pageRequested - 1).then((games) => {
            this.setState({
                games: games.data._embedded.game,
                isLoading: false,
                error: null,
            });
        }).catch((error) => {
            this.setState({
                error,
            });
        });
    }

    render() {
        const {
            games, isLoading, pageLimit, totalRecords, error,
        } = this.state;

        if (isLoading) return <Loading />;

        if (error) return <Error message={error} />;

        return (
            <Container>
                {
                    games.map((game) => (<GameCard game={game} key={game.gameName} />))
                }
                <Paginator
                    totalRecords={totalRecords}
                    pageLimit={pageLimit}
                    pageNeighbours={1}
                    onPageChanged={this.onPageChanged}
                />
            </Container>
        );
    }
}

export default ListGames;
