import './Shop.css';
import React, { useState  ,useEffect } from 'react';
import Medicine from './Medicine/Medicine';
import Products from './Products/Products';

const Shop = () => {

    const [component, setComponent] = useState(0);

    
    const handleClick = (innerText) => {
        const medicineTab = document.getElementById("medicine");
        const productsTab = document.getElementById("products");

        innerText = innerText ? innerText : 'products';
        innerText = innerText.toLowerCase();
 
        const component = (innerText === 'medicine') ? 1 : 0;

        if (component === 1) {
            medicineTab.classList.add("highlight");
            productsTab.classList.remove("highlight");
        } else {
            productsTab.classList.add("highlight");
            medicineTab.classList.remove("highlight");
        }

        setComponent(component);
    }
    
    useEffect( handleClick , [])

    return (
        <div className="mt-nav">
            <div className="sub-nav-container pt-5">
                <ul className = 'sub-nav  d-flex justify-content-center'>
                    <li id="products" onClick={(e)=>{handleClick(e.target.innerText)}}>products</li>
                    <li id="medicine" onClick={(e)=>{handleClick(e.target.innerText)}}>medicine</li>
                </ul>
            </div>
            {
                component ? <Medicine/> : <Products/>
            }
        </div>
    );
};

export default Shop;