import React from "react";

const CreateTicket = () => {
  return (
    <div className="container mt-5 mb-5" id="supportHero">
      <div className="row" id="supportWrapper">
        <div className="col-10" >
          <h1 className="mb-5">Support Portal</h1>
          <input 
            type="text"
            placeholder="Eg.how do open my account, how do open my F&O"
            style={{ width: "1300px", height: "60px" }}
          />
        </div>
        <div className="col-2">
          <h1>
          <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-3"
           style={{backgroundColor:"green"}}
        >
          My Tickets
        </button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
