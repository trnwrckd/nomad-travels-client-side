import './Blog.css';

import React from 'react';

const Blog = (props) => {

    const {title, blogImage, details, date ,author  } = props.blog;

    return (
        <div className="d-flex flex-column justify-content-between blog-card">
            <div>
                <img src={blogImage} height="350px" width="350px" alt="" className="rounded"/>
            </div>
            <div className="px-3 px-lg-2 pt-3">
                <h4>{title}</h4>
                <div className="d-flex justify-content-around align-items-center">
                    <p>{date}</p>
                    <p> By <span className="text-danger fs-5">{author}</span></p>
                </div>
                <p>{details}</p>
            </div>
            <div><button className = "btn-generic btn-red"> Read More</button></div>
        </div>
    );
};

export default Blog;