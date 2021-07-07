import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
function Navbar(){
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{fontWeight:"bold" , boxShadow:"2px 8px 30px lightgray"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"black", fontSize:"30px" ,borderRadius:"10%"}}> MyLearning Platform</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>
        <li className="nav-item dropdown" >
          <a style={{color:"blue" , fontWeight:"bold",fontSize:"17px"}} className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Course
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Java</a></li>
            <li><a className="dropdown-item" href="#">C</a></li>
            <li><a className="dropdown-item" href="#">C++</a></li>
            <li><a className="dropdown-item" href="#">DS</a></li>
            <li><a className="dropdown-item" href="#">Machine Learning</a></li>
            <li><a className="dropdown-item" href="#">AI</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );}
export default Navbar;