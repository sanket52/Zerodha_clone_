import React from "react";

const Broakrage = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-5 border-top">
        <div className="col-8 mt-5 p-4">
          <h3 className="text-primary fs-5 text-center ">
            Brokrage Calculator
          </h3>
          <ul className="mt-5 fs-6 text-muted" style={{lineHeight:"2"}}>
            <li>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell{" "}
            </li>
            <li>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </li>

            <li>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </li>

            <li>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </li>

            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>

            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
          </ul>
        </div>
        <div className="col-2"></div>
        <div className="col-2 p-4 mt-5">
          <h3 className="text-primary fs-5">List of charges</h3>
        </div>
      </div>
    </div>
  );
};

export default Broakrage;
