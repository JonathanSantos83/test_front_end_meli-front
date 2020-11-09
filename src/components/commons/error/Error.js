import './error.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Error = ({title, content}) => (
    <div className="error-ctn">
        <h2 className="title-err">{title}</h2>
        <p>{content}</p>
        <Link to='/'>Ir a la página principal</Link>
        <a>Ir a la página principal</a>
    </div>
);

Error.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}

Error.defaultProps = {
    title: 'Se produjo un error',
    content: 'Intentá más tarde'
}

export default Error;