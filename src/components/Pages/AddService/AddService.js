import './AddService.css';

import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form'; 

const AddService = () => {

    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);

        axios.post('http://localhost:5000/destinations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="mt-nav container">
            <h2> Add Service</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="form-group">

                {/* destination Name */}
                <div className="form-floating mb-2">
                    <input className="form-control px-5" type="text" placeholder="Destination Name" id="dest-name" {...register("destinationName")} />
                    <label htmlFor="dest-name">Destination Name</label>
                    {/* {errors.name && <p className="text-danger fw-bold m-0">{errors.name.message}</p>} */}
                </div>

                {/* destination location */}
                <div className="form-floating mb-2">
                    <input className="form-control px-5" type="text" placeholder="Destination Location" id="dest-loc" {...register("destinationLocation")} />
                    <label htmlFor="dest-loc">Destination Location</label>
                    {/* {errors.name && <p className="text-danger fw-bold m-0">{errors.name.message}</p>} */}
                </div>

                {/* destination description */}
                <div className="form-floating mb-2">
                    <input className="form-control px-5" type="text" placeholder="Description" id="description" {...register("description")} />
                    <label htmlFor="description">Description</label>
                    {/* {errors.email && <p className="text-danger fw-bold m-0">{errors.email.message}</p>} */}
                </div>

                {/* destination description */}
                <div className="form-floating mb-2">
                    <input className="form-control px-5" type="number" placeholder="Cost/person ($)" id="cost" {...register("costPerPerson")} />
                    <label htmlFor="cost">Cost/person ($)</label>
                    {/* {errors.email && <p className="text-danger fw-bold m-0">{errors.email.message}</p>} */}
                </div>

                {/* image url */}
                <div className="form-floating mb-2">
                    <input className="form-control px-5" type="text" placeholder="Image URL" id="img" {...register("image", { required: "Image URL is required" })} />
                    <label htmlFor="img">Image URL</label>
                    {errors.image && <p className="text-danger fw-bold m-0"> {errors.image.message}</p>}
                </div>

                <div><button className="btn-generic  btn-red">
                        Add Service
                    </button>
                </div>

            </form>


        </div>
    );
};

export default AddService;
