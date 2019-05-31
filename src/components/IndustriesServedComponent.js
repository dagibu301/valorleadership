import React from 'react';

function IndustriesServed () {
  return(
      <div>
        <div className="home-background">
          <div className="container homebackcontainer">
            <div className="row align-items-start">
              <div className="col-12">
                <div className=" tittles">
                    <picture>
                      <source media="(max-width: 575px)" srcset="/assets/images/industry.jpg" />
                      <source media="(max-width: 768px)" srcset="/assets/images/industry.jpg" />
                      <source media="(max-width: 991px)" srcset="/assets/images/industry.jpg" />
                      <source media="(max-width: 1199px)" srcset="/assets/images/industry.jpg" />
                      <img src="/assets/images/industry.jpg"  />
                    </picture>
                    <h2 className="tittles-text">Industries Served</h2>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container homebody tabs">
          <div className="container innerhomebody">

            <div className="row mt-4 ml-4 mr-4">

              <div className="col-12 col-md-4">
                <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
              </div>

              <div className="col-12 col-md-4">
                <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
              </div>

              <div className="col-12 col-md-4">
                <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
  );
}

export default IndustriesServed;
