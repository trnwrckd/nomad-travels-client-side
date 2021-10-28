import './SingleProduct.css';
import React from 'react';

const SingleProduct = (props) => {
    const {productName, productImage, originalPrice, discountPrice, sold, stock } = props.product;
    return (
        <div className="col">
            <div className="product-card h-100 py-3 d-flex flex-column justify-content-between">
                <div><img src={productImage} className="img-fluid" alt="" /></div>
                <div>
                    <h4>{productName}</h4>
                    <div className="d-flex justify-content-around w-100 bg-dark  rounded text-light fs-5 align-items-center">
                        <p className="mb-1 original-price"><strike className="">{originalPrice} BDT.</strike></p>
                        <p className="mb-1 text-warning fw-bold discount-price">{discountPrice} BDT.</p>
                    </div>
                    <div className="text-start my-2 px-4 fs-5">
                        <p className="mb-2">{sold} Already sold</p>
                        <p className="mb-2">Only {stock} left in stock!</p>
                    </div>
                    <button className="btn-generic btn-red">Buy Now <i className="fas fa-cart-plus ms-1"></i></button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;