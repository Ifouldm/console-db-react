import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const IconButton = function button(props) {
    const { icon, link, variant = 'primary' } = props;
    const iconButton = React.forwardRef(() => (
        <Button href={link} variant={variant}><FontAwesomeIcon icon={icon} /></Button>
    ));
    return (<Link to={link} component={iconButton} />);
};

export default IconButton;
