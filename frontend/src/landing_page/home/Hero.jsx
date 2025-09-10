import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <img
            className="mb-5"
            src="media/images/homeHero.png"
            alt="HeroIMage"
          />
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "25%", margin: "auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
