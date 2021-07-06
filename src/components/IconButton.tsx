import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const IconButton = function button({icon, link, variant}: {icon: IconProp, link: string, variant:string}) {
    const iconButton = React.forwardRef(() => (
        <Button href={link} variant={variant} name="btn">
            <FontAwesomeIcon icon={icon} />
        </Button>
    ));
    iconButton.displayName = "IconButton";
    return (<Link to={link} component={iconButton} />);
};

IconButton.propTypes = {
    icon: PropType.object.isRequired,
    link: PropType.string.isRequired,
    variant: PropType.string,
}

IconButton.defaultProps = {
    variant: 'primary'
}

export default IconButton;
