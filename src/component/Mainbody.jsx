import React from "react";
import homesvg from "../img/Capture.JPG";
import Cardcat from "./Cardcat";
import "./mainbody.css";
import customersupport from '../img/customer-support.png'
import Rcard from "./Rcard";
import Bestteacher from "./Bestteacher";
import Counseling from "./Counseling";


function Mainbody() {
  return (
    <>
      <div class="customer-support">
        <a href="#">
          <img src={customersupport} alt="ss"></img>
        </a>
      </div>
      <div className="container ">
        <div className="row mb-5">
          <div className="col-md-6 ">
            <img
              class="responsive"
              src={homesvg}
              alt="svg"
              height="450"
              width="600"
            />
          </div>
          <div className="col-md-6 mt-5" style={{ fontWeight: "bold" }}>
            <div className="mt-5">
              <h1>
                This is{" "}
                <span style={{ color: "#ff8b00", fontWeight: "bold" }}>
                  Learning platform
                </span>{" "}
              </h1>
              <p>Learn 100% online with world class university and industry</p>
              <p>
                experts. Develop hobbies, new skills and career-changing
                experties
              </p>
              <p>with our flexible courses,</p>
            </div>
            <button
              style={{ color: "#ff8b00", borderColor: "#ff8b00" }}
              type="submit"
              routerlink="/signup"
              className="btn btn-outline-warning my-2 my-sm-0"
              tabindex="0"
            >
              Explore Counselors
            </button>
            <button
              type="submit"
              routerlink="/login"
              className="btn btn-primary ms-2 my-sm-0"
              tabindex="0"
            >
              Explore Courses
            </button>
          </div>
        </div>
        <Cardcat />
        <Rcard/>
        <Bestteacher/>
        <Counseling/>
      </div>
    </>
  );
}

export default Mainbody;
