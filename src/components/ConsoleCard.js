import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import IconButton from './IconButton';

function ConsoleCard(props) {
    const { consoleData } = props;
    return (
        <Card className="m-3">
            <Card.Img className="logoImg" variant="top" placeholder="https://via.placeholder.com/300" src={consoleData.logoUrl} alt="Console logo" />
            <Card.Header>{consoleData.name}</Card.Header>
            <Card.Body>
                <Card.Text>{consoleData.description}</Card.Text>
                <Image fluid placeholder="https://via.placeholder.com/300" src={consoleData.photoUrl} alt="Console Photo" />
                <Card.Footer>
                    <IconButton icon={faEdit} link={`/console/update/${consoleData.id}`} variant="warning" />
                    {' '}
                    <IconButton icon={faTrashAlt} link={`/console/update/${consoleData.id}`} variant="danger" />
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default ConsoleCard;
