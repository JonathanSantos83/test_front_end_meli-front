import './item-detail.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Price from '../../commons/price/Price';
import Condition from '../../commons/condition/Condition';
import Breadcrumb from '../../commons/breadcrumb/Breadcrumb';
import LoadingHeader from '../loading-header/Loading-header';
import Error from '../../commons/error/Error';
import { fetchSearchDetail }  from '../../../ducks/detail';

const ItemDetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchSearchDetail(id));
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const data = useSelector((state) => state.details.data);
    const item = useSelector((state) => state.details.data.item);
    const categories = useSelector((state) => state.details.data.categories);
    const error = useSelector((state) => state.details.error);
    const loading = useSelector((state) => state.details.loading);  
      
    if (!error && loading) {
        return <LoadingHeader />;
    }
    if (error && !loading) {
        return <Error title='Ups se produjo un error!' content='Por favor intentá en unos minutos' />;
    }
    if (!error && !loading && data.item!==null) {
        return (
        <section className="container">
            <Breadcrumb categories={categories} />
            <div className="container item-detail">
                <div className="row">
                    <div className="col-xs-12 col-md-6 offset-md-2">
                        <figure className="item-detail-image">
                            <img src={item.picture} alt={item.title} className="img-fluid" />
                        </figure>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <Condition condition={item.condition} sold_quantity={item.sold_quantity} />
                        <h1 className="item-detail-title">{item.title}</h1>
                        <Price value={item.price} />
                        <button type="button" className="btn btn-item-buy">Comprar</button>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-xs-12 col-md-8 item-detail-description-ctn">
                        <h2 className="item-detail-title">Descripción del producto</h2>
                        <p className="item-description">{item.description}</p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
    return null;
};

export default ItemDetail;