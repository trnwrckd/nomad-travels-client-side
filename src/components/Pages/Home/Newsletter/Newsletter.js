import './Newsletter.css';

import React from 'react';

const Newsletter = () => {
    return (
        <div className="py-5 newsletter-container d-flex justify-content-center align-items-center">
            <div className="newsletter mx-4">
                <h2 className="text-uppercase mb-2">Newsletter</h2>
                <h4>Keep up with our latest news and events. Subscribe to our newsletter.</h4>
                <div className="d-flex justify-content-center">
                    <input type="email" className="form-control w-50" placeholder="Your Email.."/>
                    <button className="btn-generic ms-2">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;