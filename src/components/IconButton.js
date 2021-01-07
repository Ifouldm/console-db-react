import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const IconButton = function button(props) {
    const { type, link } = props;
    if (type === 'edit') {
        return (<Button href={link} variant="warning"><FontAwesomeIcon icon={faEdit} /></Button>);
    }
    if (type === 'delete') {
        return (<Button href={link} variant="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>);
    }
    return null;
};

export default IconButton;
