import './notfound.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="not-found">
        <h2 className="title-err">Parece que esta página no existe</h2>
        <Link to='/'>Ir a la página principal</Link>
        <a>Ir a la página principal</a>
    </div>
);

export default NotFound;