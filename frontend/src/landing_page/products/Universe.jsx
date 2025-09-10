import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-5">The Zerodha Universe</h1>
        <h5 className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </h5>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted text-center">
            Our asset management venture that is creating simple and transparent
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/tijori.svg"
            alt=""
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted text-center">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "200px" }}
          />
          <p className="text-small text-muted text-center">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>{" "}
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "200px" }}
          />
          <p className="text-small text-muted text-center">
            Our asset management venture that is creating simple and transparent
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted text-center">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "100px" }}
          />
          <p className="text-small text-muted text-center">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>{" "}
        </div>
        <button
            className="p-2 btn btn-primary fs-5 mb-5 mt-5"
            style={{ width: "25%", margin: "auto" }}
          >
            Sign up for free
          </button>
      </div>
       
    </div>
    
  );
};

export default Universe;
