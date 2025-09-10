import React from "react";

const LeftSecton = ({
  imageUrl,
  productsName,
  productsDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5 p-3 mb-5">
      <div className="row mt-5">
        <div className="col-6">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-6 ">
          <h1 className="mb-4">{productsName}</h1>
          <p className="text-muted"style={{fontSize:"20px"}}>{productsDescription}</p>
          <div style={{textDecoration:"none"}}>
           
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"60px",textDecoration:"none"}}>LearnMore</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="" style={{marginLeft:"60px"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSecton;
