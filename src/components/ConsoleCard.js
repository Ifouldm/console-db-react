import React from 'react';
import { Card, Image } from 'react-bootstrap';
import IconButton from './IconButton';

function ConsoleCard(props) {
    const { consoleData } = props;
    return (
        <Card className="m-3">
            <Card.Img className="img-thumbnail" variant="top" placeholder="https://via.placeholder.com/300" src={consoleData.logoUrl} />
            <Card.Header>{consoleData.name}</Card.Header>
            <Card.Body>
                <Card.Text>{consoleData.description}</Card.Text>
                <Image fluid placeholder="https://via.placeholder.com/300" src={consoleData.photoUrl} />
                <Card.Footer>
                    <IconButton type="edit" link={`/console/update/${consoleData._id}`} />
                    {' '}
                    <IconButton type="delete" link={`/console/delete/${consoleData._id}`} />
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default ConsoleCard;
