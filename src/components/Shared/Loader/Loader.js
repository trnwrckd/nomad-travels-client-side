import './Loader.css';

import React from 'react';

const Loader = () => {
    return (
        <div className = "loader common-bg">
            <div className="mt-nav py-5">
                <div className="spinner-border text-warning mt-5 fs-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h4>Please wait..</h4>
            </div>
        </div>
    );
};

export default Loader;