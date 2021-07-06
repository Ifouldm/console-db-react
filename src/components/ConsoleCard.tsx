import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import PropType from 'prop-types';
import IconButton from './IconButton';

function ConsoleCard({consoleData}) {
    return (
        <Card className="m-3">
            <Card.Header className="cardHeader">
                <h1>{consoleData.name}</h1>
                <Image className="logoImg" placeholder="https://via.placeholder.com/300" src={consoleData.logoUrl} alt="Console logo" />
            </Card.Header>
            <Card.Body>
                <Card.Text>{consoleData.description}</Card.Text>
                <Image fluid placeholder="https://via.placeholder.com/300" src={consoleData.photoUrl} alt="Console Photo" />
                <Card.Footer>
                    <IconButton icon={faEdit} link={`/console/update/${consoleData.id}`} variant="warning" />
                    {' '}
                    <IconButton icon={faTrashAlt} link={`/console/delete/${consoleData.id}`} variant="danger" />
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

ConsoleCard.propTypes = {
    consoleData: PropType.shape({
        name: PropType.string.isRequired,
        logoUrl: PropType.string,
        description: PropType.string,
        photoUrl: PropType.string,
        id: PropType.string.isRequired,
    }).isRequired
}

export default ConsoleCard;
