import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-5 mb-5 text-center">
      <div className="row">
        <h3>404 NOT FOUND</h3>
        <h1>Kiaan couldn’t find that page</h1>
        <p>
          We couldn’t find the page you were looking for. <br />
          Visit Zerodha’s
          <Link className="nav-link text-primary" to="/">
            Home Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
