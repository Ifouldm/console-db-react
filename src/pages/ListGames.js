import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Loading } from '../components';
import GameCard from '../components/GameCard';
import api from '../api';

class ListGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            games: [],
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        // eslint-disable-next-line import/no-named-as-default-member
        await api.getAllGames().then((games) => {
            this.setState({
                games: games.data.data,
                isLoading: false,
            });
        });
    }

    render() {
        const { games, isLoading } = this.state;
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
            </Container>
        );
    }
}

export default ListGames;
