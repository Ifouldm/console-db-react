import React from 'react';
import { Card } from 'react-bootstrap';
import IconButton from './IconButton';

function GameCard(props) {
    const { game } = props;
    return (
        <Card className="m-3">
            <Card.Header>{game.name}</Card.Header>
            <Card.Body>
                <Card.Text>{game.description}</Card.Text>
                <IconButton type="edit" link={`/game/update/${game._id}`} />
                {' '}
                <IconButton type="delete" link={`/game/delete/${game._id}`} />
            </Card.Body>
        </Card>
    );
}

export default GameCard;
