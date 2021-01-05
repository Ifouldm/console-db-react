import React from 'react';

function typeClassLookup(type) {
    let extraClasses = '';
    if (type === 'edit') {
        extraClasses += 'btn-warning';
    } else if (type === 'delete') {
        extraClasses += 'btn-danger';
    }
    return extraClasses;
}

const Button = function button(props) {
    // eslint-disable-next-line react/prop-types
    const { type, link } = props;
    const additionalClasses = typeClassLookup(type);
    return (
        <a href={link} type="button" className={`btn ${additionalClasses}`} alt={type}>{type}</a>
    );
};

export default Button;
