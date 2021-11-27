import './Loader.css';

import React from 'react';

const Loader = () => {
    return (
        <div className = "loader common-bg d-flex align-items-center justify-content-center">
            <div className="py-5">
                <div className="spinner-border text-success mt-5 display-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h4>Please wait..</h4>
            </div>
        </div>
    );
};

export default Loader;