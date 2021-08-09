import React from 'react'
import teacher1 from "../img/teacher1.jpg"
import teacher2 from "../img/teacher2.jpg"

function Bestteacher() {
    return (
        <div className="mt-5">
             <div className="mb-5 mt-5" >
      <div className="row text-center ">
      
          <div className="col-md-6 mt-5">
        <div className="mt-5">
              <h2>Our Expert Teachers.
                  </h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores temporibus et odit quisquam quidem iusto nostrum consequatur quas omnis reiciendis, animi officiis similique cum excepturi rem quo est laudantium at.</p>
              <button
            //   style={{backgroundColor:"#ff9700"}}
            type="submit" 
            routerlink="/login"
            className="btn btn-outline-warning me-3  "
            >
              Become a Teacher
              </button>
              <button
            type="submit"
            routerlink="/login"
            className="btn btn-primary ms-4"
            >
           See all Teacher
          </button>
          </div>
          </div>
          <div className="col-md-6">
        {/* <img class="responsive" src={men2} alt="img" width="635"/> */}
        <div className="container-fluid">
          <div className="row">
          <div class="col-sm-12">

          <div id="nam" class="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6 mt-2">
                          <div className="card">
                          <img class="responsive" src={teacher2} alt="img" width="635"/>
                          <div className="card-body">
                            <h5>Ardit Sulec</h5>
                           <p className="card-text">Data </p>
                            
                          </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 mt-2">
                          <div className="card">
                          <img class="responsive" src={teacher1} alt="img" width="635"/>
                          <div className="card-body">
                            <h5>Ardit Sulec</h5>
                           <p className="card-text">Data </p>
                            
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    
                  <div className="container">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6 mt-2">
                          <div className="card">
                          <img class="responsive" src={teacher2} alt="img" width="635"/>
                          <div className="card-body">
                            <h5>Ardit Sulec</h5>
                           <p className="card-text">Data </p>
                            
                          </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 mt-2">
                          <div className="card">
                          <img class="responsive" src={teacher1} alt="img" width="635"/>
                          <div className="card-body">
                            <h5>Ardit Sulec</h5>
                           <p className="card-text">Data </p>
                            
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                        </div>

                </div>
                <a href="#nam" class="carousel-control-prev" data-slide="prev">
                <span class="carousel-control-prev-icon bg-dark " style={{borderRadius:"50%"}}></span>
              </a>
              <a href="#nam" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon bg-dark " style={{borderRadius:"50%"}}></span>
              </a>
              </div>
          </div>
          </div>
        </div>
          </div>
          </div>
      </div>
        </div>
    )
}

export default Bestteacher
