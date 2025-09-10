import React from "react";

const Team = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row ">
        <h3 className="text-center">People</h3>
        <div className="col p-5 text-muted text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "55%" }}
          />

          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 mt-5 p-5 fs-5 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
           
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC)
          </p>
          <p> Playing basketball is his zen.</p>
          <p>  Connect on &nbsp;
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>
            / <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
