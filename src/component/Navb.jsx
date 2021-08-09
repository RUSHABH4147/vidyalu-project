import React from "react";
import "./nav.css";
import {Link}from 'react-router-dom'

import vlogo from "../img/vidalyulogo.png";
import SearchIcon from '@material-ui/icons/Search';

function Navb() {
  return (
    <div>
      <div
        role="alert"
        className="alert alert-primary alert-dismissible fade show m-0 text-center"
      >
        <strong>Anytime,anywhere</strong> | Learn on your schedule from any
        device{" "}
        <button
          type="button"
          data-dismiss="alert"
          aria-label="Close"
          className="close"
          style={{background:"none",outline:"none",border:"none"}}
        >
          <span aria-hidden="false">×</span>
        </button>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light ps-4 ">
        <div className="d-flex justify-content-evenly align-items-center">
        <Link to="/" className="navbar-brand" >
          <img src={vlogo} alt="" width="127" />
        </Link>
        <div className="choose-course">
          <select name="" id="" className="form-control">
            <option value="">Categories</option>
            <option value="">Humanities</option>
            <option value="">Business</option>
            <option value="">Health &amp; Medicine</option>
            <option value="">Science</option>
            <option value="">Social Sciences</option>
          </select>
        </div>
        <div className="search-cources">
          <form action="">
            <div className="d-flex">
            <input
              type="text"
              placeholder="Search Online Courses"
              className="form-control  "
            />
            <button className="btn btn-warning" style={{backgroundColor:"#fe9100",color:"#fff",borderRadius:"1px"}}>
             <SearchIcon />
            </button>
            </div>
          </form>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
          </div>
        <div className=" collapse navbar-collapse show d-flex justify-content-evenly" id="navbarSupportedContent">
          <ul className="ms-5 navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Courses +{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Counselors
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Teachers
              </a>
            </li>
          </ul>
          <div className="login-btns my-2 my-lg-0">
            
            <Link to="/signup">
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              
            >
              Sign Up
            </button>
              </Link>
            <button
              type="submit"
              routerlink="/login"
              className="btn btn-primary my-2 my-sm-0"
              tabindex="0"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navb;
