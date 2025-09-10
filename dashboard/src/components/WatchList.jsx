import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";

import { watchlist } from "../data/data";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
   const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          named="search"
          id="search"
          placeholder="search eg: infity,bse,nifty fut weekley ,gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}/50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
        <DoughnutChart data={data} />
    </div>
  );
};


export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setshowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setshowWatchlistActions(true);
  };

  const handleMouseExit = (e) => {
    setshowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="percent">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActios uid={stock.name}/>}
    </li>
  );
};

const WatchListActios = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          transitionComponent={Grow}
        >
          <button className="buy">buy</button>
        </Tooltip>

         <Tooltip
          title="Sell (s)"
          placement="top"
          arrow
          transitionComponent={Grow}
        >
          <button className="sell">sell</button>
        </Tooltip>

          <Tooltip
          title="Chart (s)"
          placement="top"
          arrow
          transitionComponent={Grow}
        >
          <button className="action"> <BarChartOutlined  className="icon"/></button>
        
        </Tooltip>

          <Tooltip
          title="more (s)"
          placement="top"
          arrow
          transitionComponent={Grow}
        >
          <button className="action"> <MoreHoriz  className="icon"/></button>
        </Tooltip>
      </span>
    </span>
  );
};
