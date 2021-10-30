import './MyOrders.css';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import Order from '../../Shared/Order/Order';

const MyOrders = () => {

    const { user } = useAuth();

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
    console.log(orders);
    if (orders.length === 0) {
        return (
            <div className="mt-nav container py-5 my-5">
                 <h2 className="py-5 my-5">No Current Orders</h2>
            </div>
        );
    }
    else {
        return (
            <div className="mt-nav container py-5 my-5">
                <h2>{user.displayName}, Here are all your orders.</h2>
                <div className="py-2 my-2 row row-cols-1 row-cols-md-2 g-5">
                    {
                        orders.map(order => <Order key={order._id} order={order}>
                            <button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>
                                Delete
                                <i class="fas fa-trash-alt ms-1"></i>
                            </button>
                        </Order>)
                    }
                </div>
            </div>
        );
    }
};

export default MyOrders;