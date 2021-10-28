import './PlaceOrder.css';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useForm } from 'react-hook-form'; 
import { useAuth } from '../../../hooks/useAuth';
import { useParams } from 'react-router';

const PlaceOrder = () => {

    const { user } = useAuth();

    const { handleSubmit, register, formState: { errors } ,reset} = useForm();

    const {id } = useParams();
    
    const [destination, setDestination] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/destinations/${id}`)
            .then(res => res.json()).then(data => setDestination(data));
    }, [id]);

    const onSubmit = (data) => {
        data.name = user.displayName;
        data.email = user.email;
        data.orderID = id;
        data.uid = user.uid;
        data.orderStatus = "pending";

        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="container py-5 mt-nav">
            <h4>{destination.destinationName}</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">

                {/* name */}
                <div className="form-floating mb-2">
                    <input className="form-control px-5" defaultValue={user.displayName} type="text" placeholder="Name" id="name" {...register("name")} />
                    <label htmlFor="name">Name</label>
                    {/* {errors.name && <p className="text-danger fw-bold m-0">{errors.name.message}</p>} */}
                </div>

                {/* email */}
                <div className="form-floating mb-2">
                    <input className="form-control px-5" defaultValue={user.email} type="email" placeholder="Email" id="email" {...register("email")} />
                    <label htmlFor="email">Email</label>
                    {/* {errors.email && <p className="text-danger fw-bold m-0">{errors.email.message}</p>} */}
                </div>

                {/* address */}
                <div className="form-floating mb-2">
                    <input className="form-control px-5" type="text" placeholder="Address" id="address" {...register("address", { required: "Address is required" })} />
                    <label htmlFor="address">Address</label>
                    {errors.address && <p className="text-danger fw-bold m-0"> {errors.address.message}</p>}
                </div>

                {/* Date */}
                <div className="form-floating mb-2">
                    <input className="form-control px-5" type="text" placeholder="Date" id="date" {...register("date", { required: "Date is required" })} />
                    <label htmlFor="date">Date</label>
                    {errors.date && <p className="text-danger fw-bold m-0"> {errors.date.message}</p>}
                </div>
                <input type="hidden" {...register("orderID")} />
                <input type="hidden" {...register("orderStatus")} />
                <input type="hidden" {...register("uid")} />

                <div><button className="btn-generic  btn-blue">
                        Confirm
                    </button>
                </div>

            </form>
        </div>
    );
};

export default PlaceOrder;