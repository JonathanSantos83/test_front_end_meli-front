import React from "react";
import { useSelector } from "react-redux";
import Item from "../item/Item";
import Breadcrumb from "../../commons/breadcrumb/Breadcrumb";
import LoadingResults from "../loading-results/Loading-results";
import Error from "../../commons/error/Error";

const ItemList = () => {
    const data = useSelector((state) => state.items.data);
    const items = useSelector((state) => state.items.data.items);
    const categories = useSelector((state) => state.items.data.categories);
    const error = useSelector((state) => state.items.error);
    const loading = useSelector((state) => state.items.loading);
    if (!error && loading) {
        return <LoadingResults title="Buscando resultados" />;
    }
    if (error && !loading) {
        return <Error title="Ups se produjo un error!" content="Por favor intentá en unos minutos"
        />
    }
    if (!error && !loading && data.items.length > 0) {
        return (
        <div className="container">
            <section>
            <Breadcrumb categories={categories} />
            {items.map((item) => (
                <Item item={item} key={item.id} />
            ))}
            </section>
        </div>
        );
    }
    return null;
};

export default ItemList;