import React from "react";

const Award = () => {
  return (
    <div className="container mt-5 ml-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largestBrokerImage" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in india</h1>
          <p>
            2+ million Zerodha clienats contribute to over 15% of all retial
            order volumes in india daily by trading investing in :
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Open demat account</p>
                </li>

                <li>
                  <p>Minor demat account</p>
                </li>

                <li>
                  <p>NRI demat account</p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <p>Upcoming IPOs</p>
                </li>

                <li>
                  <p>Brokerage charges</p>
                </li>

                <li>
                  <p>Market holidays</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
};

export default Award;
