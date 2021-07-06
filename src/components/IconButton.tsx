import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

const IconButton = function button({icon, link, variant}) {
    const iconButton = React.forwardRef(() => (
        <Button href={link} variant={variant}><FontAwesomeIcon icon={icon} /></Button>
    ));
    return (<Link to={link} component={iconButton} />);
};

IconButton.propTypes = {
    icon: PropType.string.isRequired,
    link: PropType.string.isRequired,
    variant: PropType.string,
}

IconButton.defaultProps = {
    variant: 'primary'
}

export default IconButton;
