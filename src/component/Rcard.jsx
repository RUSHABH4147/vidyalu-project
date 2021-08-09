import React from "react";
import lappy from "../img/lappy.jpg";
import pen from "../img/pen.jpg";
import book from "../img/book.jpg";
import "./mainbody.css";
import rating from "../img/rating-4.png";

function Rcard() {
  return (
    <div className="mb-5">
      {/* <div className="row d-flex justify-content-between p-2 mb-5">
            <div className="col-sm-6">
            <h3>Popular courses.</h3>
                
            </div>
            <div className="col-sm-6 ">
              
            <ul className=" d-flex justify-content-between" style={{fontSize:"1.5rem"}}>
                <li className="list">Data Science</li>
                <li className="list ms-4">Computer Science</li>
                <li className="list ms-4">Business</li>
                <li className="list ms-4">Healthcare</li>
                <li className="list ms-4">Design</li>
            </ul>
            </div>
        </div>
      <div class="row row-cols-1 row-cols-md-4 g-4 mb-5 p-2 ">
        <div class="col">
          <div class="card shadow ">
            <img src={lappy} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Data Engineer</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow">
            <img src={lappy} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Data scientist</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow">
            <img src={lappy} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Data Structure and Ai</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow">
            <img src={lappy} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Programming for DATA</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
       
      </div> */}
      <h4 class="cat-heading mt-5 mb-5">
        Popular Courses.{" "}
        <div class="course-tab">
          <ul>
            <li class="active">
              <a href="#">Data Science</a>
            </li>
            <li>
              <a href="#">Computer Science</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Healthcare</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
          </ul>
        </div>
      </h4>
      <div class="container-fluid mb-5">
        <div class="row">
          <div class="col-sm-12">
            <div id="inam" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow "
                          // style={{ width: "300px", margin: "auto" }}
                        >
                          <img src={lappy} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data Engineer</h5>
                            <img
                              _ngcontent-vno-c8=""
                              src={rating}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          // style={{ width: "300px" }}
                        >
                          <img src={lappy} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data Structure and Ai</h5>
                            <img
                              _ngcontent-vno-c8=""
                              src={rating}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          // style={{ width: "300px" }}
                        >
                          <img src={lappy} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data scientist</h5>
                            <img
                              _ngcontent-vno-c8=""
                              src={rating}
                              alt=""
                              width="87"
                              height="15"
                            />
                           <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          // style={{ width: "300px" }}
                        >
                          <img src={lappy} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data scientist</h5>
                            <img
                              _ngcontent-vno-c8=""
                              src={rating}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow "
                          // style={{ width: "300px", margin: "auto" }}
                        >
                          <img src={lappy} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data Engineer</h5>

                            <img
                              _ngcontent-vno-c8=""
                              src={rating}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          //  style={{ width: "300px" }}
                        >
                          <img src={lappy} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data Structure and Ai</h5>
                            <img
                              _ngcontent-vno-c8=""
                              src={rating}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          // style={{ width: "300px" }}
                        >
                          <img src={lappy} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data scientist</h5>
                            <img
                              _ngcontent-vno-c8=""
                              src={rating}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-3 mt-2">
                        <div
                          class="card shadow"
                          //  style={{ width: "300px" }}
                        >
                          <img src={lappy} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">Data scientist</h5>
                            <img
                              _ngcontent-vno-c8=""
                              src={rating}
                              alt=""
                              width="87"
                              height="15"
                            />
                            <h3 class="estimate-time">
                              Estimated Time{" "}
                              <span>5 months at 5-10 hrs/week</span>
                            </h3>
                            <h2  class="course-price">₹455</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#inam" class="carousel-control-prev" data-slide="prev">
                <span
                  class="carousel-control-prev-icon bg-dark "
                  style={{ borderRadius: "50%" }}
                ></span>
              </a>
              <a href="#inam" class="carousel-control-next" data-slide="next">
                <span
                  class="carousel-control-next-icon bg-dark "
                  style={{ borderRadius: "50%" }}
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 text-center">
        <a href="#" style={{color:"#ff9700",borderColor:"#ff9700"}} class="btn btn-outline-warning my-3">
          Explore All Courses
        </a>
      </div>
    </div>
  );
}

export default Rcard;
