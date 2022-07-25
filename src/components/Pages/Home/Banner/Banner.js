import "./Banner.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";

const Banner = () => {
  const history = useHistory();
  const { user } = useAuth();

  const redirectToRegister = () => {
    history.push("/login");
  };

  return (
    <div className="banner mt-nav">
      <div className="my-5">
        <div className="my-5 py-5 my-lg-0 text-shadow banner-text-container">
          <div className="container d-flex align-items-center justify-content-center flex-column">
            <h1 className="mb-3 display-4">Hello Wanderer!</h1>
            <p className="mb-3 banner-text">
              {" "}
              <span data-col="cyan">Nomad</span>
              <span data-col="orange">Travels™</span> is an international travel
              planner and organizer based on Dhaka,Bangladesh. <br /> Book a
              tour to <span data-col="yellow">get away from everything.</span>{" "}
              <br /> Don't you just <span data-col="red">need</span> that{" "}
              <span data-col="green">break?</span>
            </p>
            {!user.email && (
              <button onClick={redirectToRegister} className="btn-banner">
                Login Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
