import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IconButton from './IconButton';

function GameCard(props) {
    const { game } = props;
    return (
        <Card className="m-3">
            <Card.Header>{game.gameName}</Card.Header>
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
                <IconButton icon={faEdit} link={`/game/update/${game.gameId}`} variant="warning" />
                {' '}
                <IconButton icon={faTrashAlt} link={`/game/delete/${game.gameId}`} variant="danger" />
            </Card.Body>
        </Card>
    );
}

export default GameCard;
