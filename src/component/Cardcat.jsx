import React from "react";
import girl from '../img/girl.JPG'
import './mainbody.css'
import CodeIcon from '@material-ui/icons/Code';
import {ImPencil2}from "react-icons/im";
import {GiPublicSpeaker}from "react-icons/gi";
import {GiComputing}from "react-icons/gi";

function Cardcat() {
  return (
    <div className="mb-5">
      <div className="row text-center mb-5">
        <div className="col-12  d-flex justify-content-between mb-4">
          <h3>Top Categories:</h3>
          <button
            type="submit"
            routerlink="/login"
            className="btn btn-primary "
          >
            View All
          </button>
        </div>
        <div className="col-md-3 ">
          <div className="card shadow">
            <div className="card-body">
            <ImPencil2 className="mb-3" style={{ fontSize: 80 }}/>
              <h5 className="card-title">Design</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
                <CodeIcon className="mb-3" style={{ fontSize: 80 }}/>
              <h5 className="card-title">Development</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
            <GiPublicSpeaker className="mb-3" style={{ fontSize: 80 }}/>
              <h5 className="card-title">Marketing</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
            <GiComputing style={{ fontSize: 80 }} className="mb-3"/>
              <h5 className="card-title">IT & Software</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 mt-5" style={{backgroundColor:"#d6edf5"}} >
      <div className="row text-center ">
      <div className="col-md-6">
        <img class="responsive" src={girl} alt="img" width="635"/>
          </div>
          <div className="col-md-6 mt-5">
        <div className="mt-5">
              <h2>Join us today as a Teacher
                  </h2>
                  <h2>or a Counselor</h2>
              <button
              style={{backgroundColor:"#ff9700"}}
            type="submit" 
            routerlink="/login"
            className="btn btn-outline  "
            >
              Become a counselor
              </button>
              <button
            type="submit"
            routerlink="/login"
            className="btn btn-primary ms-2"
            >
           Become a Teacher
          </button>
          </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Cardcat;
