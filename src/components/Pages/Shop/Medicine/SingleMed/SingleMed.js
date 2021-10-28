import './SingleMed.css';
import React from 'react';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleMed = (props) => {

    const { medName,amount, medType, chemicalName, pharma, stripPrice, packPrice } = props.medicine;

    return (
        <div className="col">
            <div className="med-container p-3">
                <div className="d-flex align-items-center fs-3 ">
                    <FontAwesomeIcon icon={faPills} ></FontAwesomeIcon>
                    <span className="ms-3">{medName}</span>
                    <span className="fs-5 ms-3">{medType}</span>
                </div>
                <div>
                    <p>{chemicalName}</p>
                    <p>{amount}</p>
                    <p>{pharma}</p>
                    <div className="text-start d-flex justify-content-between align-items-center mt-2">
                        <div className="price-info">
                            <p className="price"><span className="fs-5 fw-bold">{stripPrice}  BDT </span>per Strip</p>
                            <p className="price"><span className="fs-5 fw-bold">{packPrice}  BDT </span>per Box</p>
                        </div>
                        <div className="ms-2">
                            <button className="btn-generic btn-blue">
                                <small>
                                    Buy Now<i className="fas fa-cart-plus"></i>
                                </small>
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default SingleMed;