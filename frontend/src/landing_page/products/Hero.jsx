import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5 p-5  border-bottom mb-5">
      <div className="row text-center p-3">
        <h2 className="mb-3">Zerodha Products</h2>
        <h5 className="mb-4 fs-4 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <h5 className="mb-5 text-muted">
          Check out our
          <a href="" style={{ textDecoration: "none" }}>
           &nbsp; investment offerings →
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Hero;
