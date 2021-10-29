import './MyOrders.css';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import Order from '../../Shared/Order/Order';

const MyOrders = () => {

    const { user } = useAuth();
    console.log(user.uid);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://enigmatic-caverns-80998.herokuapp.com/orders/${user.uid}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.uid]);

     const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        
        if (proceed) {
            const url = `https://enigmatic-caverns-80998.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    return (
        <div className="mt-nav container">
            <h2>This is my orders</h2>
            <div>
                {
                    orders.map(order => <Order key={order._id} order={order}>
                         <button className="btn-danger" onClick={()=> handleDeleteOrder(order._id)}> Delete</button>
                    </Order>)
                }
            </div>
        </div>
    );
};

export default MyOrders;