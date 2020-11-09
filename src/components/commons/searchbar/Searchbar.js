import './searchbar.scss'
import React from 'react';
import SearchForm from '../searchform/Searchform';
import { Link } from 'react-router-dom';

const Searchbar = () => {
    return (
        <header className="ctn-searchbox">
            <div className="container">
                <div className="searchbox">
                    <Link className="nav-logo" to='/' />
                    <div className="input-group-search">
                        <SearchForm placeholder="Nunca dejes de buscar"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Searchbar;