import React from "react";

const RightSection = ({
  imageUrl,
  productsName,
  productsDescription,
  tryDemo, 
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-3">
          <h1 className="mt-5 mb-5 ">{productsName}</h1>
          <p className="fs-5 text-muted">{productsDescription}</p>
          <a href={tryDemo} style={{textDecoration:"none",fontSize:"20px"}} >Trydemo <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-6 ">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
