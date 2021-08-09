import React from "react";
import counseling from "../img/counseling1.jpg";
import rating from "../img/rating-4.png";
import avatar from "../img/avatar-small.jpg";
import "./counseling.css"

function Counseling() {
  return (
    <div className="p-5 mb-5" style={{backgroundColor:"#d6edf6"}}>
      <div _ngcontent-vno-c8="" class="counseling-sessions">
        <div _ngcontent-vno-c8="" class="container">
          <div _ngcontent-vno-c8="" class="row">
            <div _ngcontent-vno-c8="" class="col-md-12">
              <h4 _ngcontent-vno-c8="" class="cat-heading">
                Counseling sessions{" "}
                <a _ngcontent-vno-c8="" href="#" class="btn btn-primary">
                  See all
                </a>
              </h4>
            </div>
            <div _ngcontent-vno-c8="" class="col-md-4">
              <div _ngcontent-vno-c8="" class="counseling-box">
                <div _ngcontent-vno-c8="" class="counseling-img">
                  <img
                    _ngcontent-vno-c8=""
                    src={counseling}
                    alt=""
                  />
                </div>
                <div _ngcontent-vno-c8="" class="counseling-by">
                  <div _ngcontent-vno-c8="" class="counseling-text">
                    <div _ngcontent-vno-c8="" class="counseling-rating">
                      <img
                        _ngcontent-vno-c8=""
                        src={rating}
                        alt=""
                        width="87"
                        height="15"
                      />
                    </div>
                    <h5 _ngcontent-vno-c8="">Counseling sessions 1</h5>
                    <h6 _ngcontent-vno-c8="">By John Doe</h6>
                  </div>
                  <div _ngcontent-vno-c8="" class="counseling-person">
                    <img
                      _ngcontent-vno-c8=""
                      src={avatar}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div _ngcontent-vno-c8="" class="col-md-4">
              <div _ngcontent-vno-c8="" class="counseling-box">
                <div _ngcontent-vno-c8="" class="counseling-img">
                  <img
                    _ngcontent-vno-c8=""
                    src={counseling}
                    alt=""
                  />
                </div>
                <div _ngcontent-vno-c8="" class="counseling-by">
                  <div _ngcontent-vno-c8="" class="counseling-text">
                    <div _ngcontent-vno-c8="" class="counseling-rating">
                      <img
                        _ngcontent-vno-c8=""
                         src={rating}
                        alt=""
                        width="87"
                        height="15"
                      />
                    </div>
                    <h5 _ngcontent-vno-c8="">Counseling sessions 1</h5>
                    <h6 _ngcontent-vno-c8="">By John Doe</h6>
                  </div>
                  <div _ngcontent-vno-c8="" class="counseling-person">
                    <img
                      _ngcontent-vno-c8=""
                      src={avatar}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div _ngcontent-vno-c8="" class="col-md-4">
              <div _ngcontent-vno-c8="" class="counseling-box">
                <div _ngcontent-vno-c8="" class="counseling-img">
                  <img
                    _ngcontent-vno-c8=""
                    src={counseling}
                    alt=""
                  />
                </div>
                <div _ngcontent-vno-c8="" class="counseling-by">
                  <div _ngcontent-vno-c8="" class="counseling-text">
                    <div _ngcontent-vno-c8="" class="counseling-rating">
                      <img
                        _ngcontent-vno-c8=""
                        src={rating}
                        alt=""
                        width="87"
                        height="15"
                      />
                    </div>
                    <h5 _ngcontent-vno-c8="">Counseling sessions 1</h5>
                    <h6 _ngcontent-vno-c8="">By John Doe</h6>
                  </div>
                  <div _ngcontent-vno-c8="" class="counseling-person">
                    <img
                      _ngcontent-vno-c8=""
                      src={avatar}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counseling;
