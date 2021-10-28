import './Medicine.css';
import React, { useEffect, useState } from 'react';
import SingleMed from './SingleMed/SingleMed';


const Medicine = () => {

    const [medicines, setMedicines] = useState([]);

    useEffect(()=>{
        fetch('./medicine.json').then(result => result.json())
            .then(data =>setMedicines(data));
    },[])


    return (
        <div className="container py-3 overflow-hidden">
            <h1>Essential Medicines</h1>
            <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-3 py-4">
            {
                medicines.map(medicine => <SingleMed key={medicine.medID} medicine= {medicine} />)
            }
            </div>
        </div>
    );
};

export default Medicine;