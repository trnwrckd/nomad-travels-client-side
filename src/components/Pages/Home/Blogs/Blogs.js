import './Blogs.css';
import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogs.json').then(res => res.json())
            .then(data => setBlogs(data));
    },[])

    return (
        <div className="blogs"> 
            <div className="container mt-5 py-5 overflow-hidden">
                <h1>Healthcare Blogs</h1>
                <div className ='row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3 gy-5 py-4'>
                {
                    blogs.map( blog=> <Blog key= {blog.blogID} blog = {blog} /> )
                }
                </div>
            </div>
        </div>
    );
};

export default Blogs;