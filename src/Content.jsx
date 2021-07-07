import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
function Content(){
  return (
    <main>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" style={{justifyContent:"center"}}>
        <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <p className="lead">Offer For Limited Period</p>
            <hr/>
            <h4>JAVA</h4>
            <del style={{color:"red"}}>15,000</del>
            <p style={{color:"blue"}}>7,000</p>
            <button className="btn btn-sucscess">Buy</button>
          </div>
        </div>
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
          <p className="lead">Offer For Limited Period</p>
            <hr/>
            <h4>python</h4>
            <del style={{color:"red"}}>12,000</del>
            <p style={{color:"blue"}}>5,000</p>
            <button className="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Content;