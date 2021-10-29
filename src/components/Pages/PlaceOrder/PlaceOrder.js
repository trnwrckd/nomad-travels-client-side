import './PlaceOrder.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'; 
import { useAuth } from '../../../hooks/useAuth';
import { useParams } from 'react-router';

const PlaceOrder = () => {

    const { user } = useAuth();
    // datepicker state

    const { handleSubmit, register, formState: { errors } ,reset} = useForm();

    const {id } = useParams();
    
    const [destination, setDestination] = useState([]);
    const [persons, setPersons] = useState(1);

    const handleChangePersons = (add,e) => {
        e.preventDefault();
        let newPersons;
        if (!add && persons <= 1) {
            newPersons = 0;
        }
        else if (add) {
            newPersons = persons + 1;
        }
        else {
            newPersons = persons - 1;
        }
        setPersons(newPersons)
    }

    
    useEffect(() => {
        fetch(`https://enigmatic-caverns-80998.herokuapp.com/destinations/${id}`)
            .then(res => res.json()).then(data => setDestination(data));
    }, [id]);

    const onSubmit = (data) => {
        data.name = user.displayName;
        data.email = user.email;
        data.location = destination.destinationName;
        data.uid = user.uid;
        data.persons = persons;
        data.orderStatus = "pending";
        console.log(data)

        axios.post('https://enigmatic-caverns-80998.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                    setPersons(1);
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
                    
                    <input type="date" {...register("date")} />
                </div>

                <div>
                    <button onClick={(e)=>handleChangePersons(0,e)}>-</button>
                    <span>{persons}</span>
                    <button onClick={(e)=>handleChangePersons(1,e)}>+</button>
                </div>

                <input type="hidden" {...register("location")} />
                <input type="hidden" {...register("orderStatus")} />
                <input type="hidden" {...register("uid")} />
                <input type="hidden" {...register("persons")} />

                <div><button className="btn-generic  btn-blue">
                        Confirm
                    </button>
                </div>

            </form>
        </div>
    );
};

export default PlaceOrder;