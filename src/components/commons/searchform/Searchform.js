import './searchform.scss';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSearchItems } from '../../../ducks/items';

const SearchForm = ({placeholder}) => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const onChange = event => {
        setSearch(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();
        if(search.trim() === '') return;
        dispatch(fetchSearchItems(search))
        history.push(`/items?search=${search}`)
    }
    return (
        <form className="form-inline form-search" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="search_items">Search</label>
            <div className="input-group">
                <input className="form-control" name="search" id="search_items" autoFocus component="input" maxLength="120" autoCapitalize="off" autoCorrect="off" spellCheck="false" autoComplete="off" placeholder={placeholder} type="text" value={search} onChange={onChange} />
                <div className="input-group-prepend">
                    <button className="input-group-text search" type="submit"/>
                </div>
            </div>
        </form>
    );
}

SearchForm.propTypes = {
    placeholder: PropTypes.string
}

SearchForm.defaultProps = {
    placeholder: 'Buscar',
}

export default SearchForm;