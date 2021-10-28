import './Products.css';
import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const Products = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('./products.json').then(result => result.json())
            .then(data => setProducts(data));
    } , [])

    return (
        <div className="container py-3 overflow-hidden">
            <h1>Top Products</h1>
            <div className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-3 py-4">
            {
                products?.map( product => <SingleProduct key={product.productID} product={product} /> )
            }
            </div>
        </div>
    );
};

export default Products;