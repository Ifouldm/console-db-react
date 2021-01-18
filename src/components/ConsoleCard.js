import React from 'react';
import { Card } from 'react-bootstrap';
import IconButton from './IconButton';

function ConsoleCard(props) {
    const { console } = props;
    return (
        <Card className="m-3">
            <Card.Header>{console.name}</Card.Header>
            <Card.Body>
                <Card.Text>{console.description}</Card.Text>
                <IconButton type="edit" link={`/console/update/${console._id}`} />
                {' '}
                <IconButton type="delete" link={`/console/delete/${console._id}`} />
            </Card.Body>
        </Card>
    );
}

export default ConsoleCard;
