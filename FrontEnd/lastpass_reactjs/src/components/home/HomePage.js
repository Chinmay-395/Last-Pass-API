import React from "react";
import { Link } from "react-router-dom";
import CheckAuth from "../../containers/CheckAuth"
const HomePage = () => (
  <div className="jumbotron">
    <h1>Eminent Password</h1>
    <p>
      <span>
        One Password to rule them all, One Password to find them,
        One Password to bring them all. and in the darkness bind them.
      </span>
    </p>
    <CheckAuth />
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
