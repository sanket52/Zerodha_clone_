import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center p-5">
        <h1 className="mt-5 mb-5">Charges</h1>
        <p className="fs-4 text-muted mb-5">List of all charges and taxes</p>
      </div>
      <div className="row  p-5 text-center">
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted  mt-3 fs-5">
            {" "}
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg" alt="" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted mt-3 fs-5">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted  mt-3 fs-5">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
