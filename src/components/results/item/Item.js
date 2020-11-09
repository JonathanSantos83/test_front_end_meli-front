import './item.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Price from '../../commons/price/Price';

const Item = ({item}) => {
    return (
        <article className="item">
            <Link className="item-image" to={`items/${item.id}`}>
                <figure className="item-image">
                    <img src={item.picture} alt={item.title}  className="d-block item-img" />
                </figure>
            </Link>
            <div className="item-ctn">
                <div className="item-header">
                    <div className="d-flex">
                        <Price value={item.price} /> 
                        {item.free_shipping && <span className="shipping" title="Envío gratis"></span>}
                    </div>
                    <p className="text-location">{item.location}</p>
                </div>
                <Link className="item-title" to={`items/${item.id}`}>
                    <h2>{item.title}</h2>
                </Link>
            </div>
        </article>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        picture: PropTypes.string,
        price: PropTypes.shape({
            currency: PropTypes.string,
            amount: PropTypes.number
        }),
        location: PropTypes.string
    })
}

export default Item;