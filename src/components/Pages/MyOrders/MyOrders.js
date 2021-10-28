import './MyOrders.css';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import Order from '../../Shared/Order/Order';

const MyOrders = () => {

    const { user } = useAuth();
    console.log(user.uid);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.uid}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.uid])

    return (
        <div className="mt-nav container">
            <h2>This is my orders</h2>
            <div>
                {
                    orders.map(order=> <Order key ={order._id} order = {order}></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrders;