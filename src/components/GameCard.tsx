import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import IconButton from './IconButton';

function GameCard({game}) {
    return (
        <Card className="m-3">
            <Card.Header><h3>{game.gameName}</h3></Card.Header>
            <Card.Body>
                <Card.Text>
                    {game.description}
                </Card.Text>
                <ListGroup>
                    {game.manufacturer
                    && (
                        <ListGroup.Item>
                            Manufacturer:
                            {game.manufacturer}
                        </ListGroup.Item>
                    )}
                    {game.developer
                    && (
                        <ListGroup.Item>
                            Developer:
                            {game.developer}
                        </ListGroup.Item>
                    )}
                    {game.year
                    && (
                        <ListGroup.Item>
                            Year:
                            {game.year}
                        </ListGroup.Item>
                    )}
                    {game.genre
                    && (
                        <ListGroup.Item>
                            Genre(s):
                            {game.genre}
                        </ListGroup.Item>
                    )}
                    {game.score
                    && (
                        <ListGroup.Item>
                            Score:
                            {game.score}
                        </ListGroup.Item>
                    )}
                    {game.players
                    && (
                        <ListGroup.Item>
                            Players:
                            {game.players}
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item action>
                        <Link to="/api/console/consoleID">
                            Console:
                            {game.console}
                        </Link>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <IconButton icon={faEdit} link={`/game/update/${game.gameId}`} variant="warning" />
                {' '}
                <IconButton icon={faTrashAlt} link={`/game/delete/${game.gameId}`} variant="danger" />
            </Card.Footer>
        </Card>
    );
}

GameCard.propTypes = {
    game: PropType.shape({
        gameName: PropType.string,
        description: PropType.string,
        manufacturer: PropType.string,
        console: PropType.string,
        developer: PropType.string,
        year: PropType.number,
        genre: PropType.arrayOf(PropType.string),
        score: PropType.number,
        players: PropType.number,
        gameId: PropType.string,
    }).isRequired
}

export default GameCard;
