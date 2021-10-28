import './ManageOrders.css';

import React, { useEffect, useState } from 'react';
import Order from '../../Shared/Order/Order';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div className =" container mt-nav">
            <h1>Manage Orders</h1>
            <div>
                {
                    orders.map(order=> <Order key ={order._id} order = {order}></Order>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;