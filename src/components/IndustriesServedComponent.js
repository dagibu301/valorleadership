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
              <div className="col-12">
                <p>Our experienced professionals have helped clients improve their bottom line and build stronger businesses.</p>
                <h2>Here are a few of the highlights…</h2>
              </div>
            </div>
            <div className="row mt-4 ml-4 mr-4">

              <div className="col-12 col-md-4">
                <h5>Manufacturing & Processing</h5>
                <ul>
                  <li>Aerospace</li>
                  <li>Automotive</li>
                  <li>Capital equipment</li>
                  <li>Chemicals</li>
                  <li>Consumer products</li>
                  <li>Contract manufacturing</li>
                  <li>Electrical and electronic equipment</li>
                  <li>Food</li>
                  <li>Foundries and casting operations</li>
                  <li>Furniture and fixtures</li>
                  <li>Industrial</li>
                  <li>Industrial machinery & equipment</li>
                  <li>Injection Molding</li>
                  <li>Instruments</li>
                  <li>Lumber</li>
                  <li>Medical products</li>
                  <li>Metal fabrication and stamping</li>
                  <li>Mining and Minerals</li>
                  <li>Oil</li>
                  <li>Paper</li>
                  <li>Plastics and rubber</li>
                  <li>Plumbing</li>
                  <li>Printing and publishing</li>
                  <li>Steel Mills</li>
                  <li>Stone, clay, glass & concrete products</li>
                  <li>Textiles and apparel</li>
                </ul>
              </div>

              <div className="col-12 col-md-4">
                <h5>Distribution</h5>
                <ul className="mb-5">
                  <li>Automotive</li>
                  <li>Construction products</li>
                  <li>Electronics</li>
                  <li>Farm Products</li>
                  <li>Fasteners</li>
                  <li>Food</li>
                  <li>HVAC and electrical</li>
                  <li>Office products</li>
                  <li>Pharmaceuticals</li>
                  <li>Publications</li>
                  <li>Service parts</li>
                  <li>Steel</li>
                </ul>

                <h5>Retail</h5>
                <ul>
                  <li>Apparel</li>
                  <li>Automotive dealers</li>
                  <li>Building materials</li>
                  <li>Drug stores</li>
                  <li>Food stores</li>
                  <li>Footwear</li>
                  <li>Furniture</li>
                  <li>Home furnishing</li>
                  <li>Restaurants, food service & fast food</li>
                </ul>

              </div>

              <div className="col-12 col-md-4 mb-5">
                <h5>Leisure and Service </h5>
                <ul className="mb-5">
                  <li>Amusement and recreations</li>
                  <li>Business services</li>
                  <li>Casinos and gaming</li>
                  <li>Consulting and training services</li>
                  <li>Cooperatives</li>
                  <li>Direct marketing</li>
                  <li>Energy</li>
                  <li>Franchise operations</li>
                  <li>Hotels</li>
                  <li>Insurance</li>
                  <li>Non-profits</li>
                  <li>Software</li>
                  <li>Telecom carriers</li>
                  <li>Telecom infrastructure</li>
                  <li>Telecom resellers</li>
                  <li>Theatres</li>
                  <li>two</li>
                  <li>three</li>
                </ul>

                <h5>Healthcare</h5>
                <ul>
                  <li>Assisted living</li>
                  <li>Home healthcare</li>
                  <li>Nursing homes</li>
                  <li>Restructuring & Turnaround</li>
                  <li>Mergers, Acquisitions & Divestitures</li>
                  <li>Operations Improvement</li>
                  <li>Compliance</li>
                  <li>Hospital Management</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
  );
}

export default IndustriesServed;
