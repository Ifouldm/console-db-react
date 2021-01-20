/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Loading, Paginator } from '../components';
import GameCard from '../components/GameCard';
import api from '../api';

class ListGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            totalRecords: 0,
            allGames: [],
            games: [],
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        // eslint-disable-next-line import/no-named-as-default-member
        await api.getAllGames().then((games) => {
            this.setState({
                allGames: games.data.data,
                games: games.data.data.slice(0, 3),
                // totalRecords: games.data.data.length,
                totalRecords: 100,
                isLoading: false,
            });
        });
    }

    onPageChanged = (data) => {
        const { pageLimit, currentPage } = data;
        this.setState({
            games: this.state.allGames.slice((currentPage - 1) * pageLimit,
                (currentPage - 1) * pageLimit + pageLimit),
        });
    }

    render() {
        const { games, isLoading, totalRecords } = this.state;
        if (isLoading) {
            return (<Loading />);
        }
        return (
            <Container>
                {
                    games.map((game) => (
                        <GameCard game={game} key={game._id} />
                    ))
                }
                <Paginator
                    totalRecords={totalRecords}
                    pageLimit={4}
                    pageNeighbours={1}
                    onPageChanged={this.onPageChanged}
                />
            </Container>
        );
    }
}

export default ListGames;
