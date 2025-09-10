import React from "react";
import { Route, Routes } from "react-router-dom";
import Summary from "./Summary.jsx";
import Orders from "./Orders.jsx";
import Holding from "./Holding.jsx";
import Position from "./Position.jsx";
import Funds from "./Funds.jsx";
import App from "./App.jsx";
import WatchList from "./WatchList.jsx"; // ✅ make sure this exists
import { GeneralContextProvider } from "./GeneralContext";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
     
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holding" element={<Holding />} />
          <Route path="/position" element={<Position />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/app" element={<App />} />
           
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
