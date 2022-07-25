import "./Review.css";

import React from "react";

const Review = (props) => {
  const { name, image, content } = props.review;

  return (
    <div className="review-container p-3 mt-3 mx-3">
      <p className="px-3">
        {" "}
        <small>{content}</small>
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <img src={image} className="img-circle" height="48px" alt="" />
        </div>
        <h5 className="ms-2" data-col="blue">
          {name}
        </h5>
      </div>
    </div>
  );
};

export default Review;
