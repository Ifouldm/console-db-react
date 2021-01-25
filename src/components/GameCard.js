import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card } from 'react-bootstrap';
import IconButton from './IconButton';

function GameCard(props) {
    const { game } = props;
    return (
        <Card className="m-3">
            <Card.Header>{game.gameName}</Card.Header>
            <Card.Body>
                <Card.Text>{game.description}</Card.Text>
                <IconButton icon={faEdit} link={`/game/update/${game.gameId}`} variant="warning" />
                {' '}
                <IconButton icon={faTrashAlt} link={`/game/delete/${game.gameId}`} variant="danger" />
            </Card.Body>
        </Card>
    );
}

export default GameCard;
