import React from 'react';
import { Media, Card, CardHeader, CardBody } from 'reactstrap';
function Home() {
    return(
      <div>
        <div className="home-background">

          <div className="container homebackcontainer">
            <div className="row align-items-start">
              <div className="col-12">

                <picture>
                  <source media="(max-width: 575px)" srcset="/assets/images/index_575.jpg" />
                  <source media="(max-width: 768px)" srcset="/assets/images/index_768.jpg" />
                  <source media="(max-width: 991px)" srcset="/assets/images/index_991.jpg" />
                  <source media="(max-width: 1199px)" srcset="/assets/images/index_1199.jpg" />
                  <img src="/assets/images/index_14.jpg" />
                </picture>
              </div>
            </div>
          </div>
        </div>


        <div className="container homebody">
          <div className="container innerhomebody">
            <div className="row ">
              <div className="col-md-8">
                <ul className="homelist">
                  <li><span className="fa fa-check fa-lg"></span>  We operate with complete integrity, and display our commitment to excellence in everything we do.</li>
                  <li><span className="fa fa-check fa-lg"></span>  We deliver high added value. We will not accept an assignment unless we can do so and we have
         voluntarily exited assignments to adhere to this principle.</li>
                  <li><span className="fa fa-check fa-lg"></span>  We have real world, hands-on experience managing in turnaround and high growth situations.</li>
                  <li><span className="fa fa-check fa-lg"></span>  A Certified Turnaround Professional (CTP) is involved in every engagement.</li>
                  <li><span className="fa fa-check fa-lg"></span>  We give a clear, direct and honest assessment of your business situation.</li>
                  <li><span className="fa fa-check fa-lg"></span>  We use our experience and creativity to develop the best alternatives, given the situation, rather than          offering standard answers.</li>
                  <li><span className="fa fa-check fa-lg"></span>  We will work side by side with you in the implementation of your chosen alternative.</li>
                </ul>

                <p className="ml-4">Valor Leadership Partners has delivered outstanding results for a variety of stakeholders including banks, private equity firms, attorneys, management teams and owners in distress situations. Over thirty years, Valor has also completed engagements in an extensive array of nearly fifty industry sectors.</p>

                <p className="ml-4">In these times of rapid change and new challenges, the skill and depth of experience of Valor Leadership Partners will yield the value and results you need. We are able to move quickly and decisively, so contact us today.</p>
              </div>
              <div className="col-md-4 mb-4">
              <Card>
                <CardHeader className="bg-secondary text-white">Recent Engagements</CardHeader>
                <CardBody>
                  <h5>Patrick Farms Partnership Chapter 11 </h5>
                  <p>Engaged by Patrick Farms, a large grower/packer/shipper of produce crops to serve as restructuring advisor during the pendency of its chapter 11 proceeding. The case is pending in the Southern District of Georgia.</p>
                  <hr />
                  <h5>Distributor of Construction Related Supplies </h5>
                  <p>Engaged by the secured lender to provide an assessment of the company's financial condition and management, evaluate the lender's collateral and to provide the lender with options to protect its position and maximize its loan recovery.</p>
                  <hr />
                  <h5>Mixed Use Inner City Redevelopment Project</h5>
                  <p>Engaged by the developer of this real estate project to assess the current financial status of the project, development cash projections for the completion of the project and provide support in securing additional financing.</p>
                </CardBody>
              </Card>
              </div>
            </div>

            <div className="row ">
              <div className="offset-md-5 col-12">
                <h3>Professional Services</h3>
              </div>
            </div>

            <div className="row ">
              <div className="col-12 offset-md-1 col-md-5 mb-5 mt-3">
                  <a role="button" className="btn btn-info btn-block btn-lg " href="/home"><i className="fa fa-briefcase"></i> Restructuring Services </a>
                  <a role="button" className="btn btn-info btn-block btn-lg" href="/home"><i className="fa fa-random"></i> Turnaround Consulting </a>
                  <a role="button" className="btn btn-info btn-block btn-lg" href="/home"><i className="fa fa-search"></i> Lender Consulting </a>
                  <a role="button" className="btn btn-info btn-block btn-lg" href="/home"><i className="fa fa-address-card"></i> Consulting to Other Stakeholders </a>
              </div>
              <div className="col-12 col-md-5 mb-5 mt-3">
                  <a role="button" className="btn btn-info btn-block btn-lg" href="/home"><i className="fa fa-arrow-circle-up"></i> High Growth Services </a>
                  <a role="button" className="btn btn-info btn-block btn-lg" href="/home"><i className="fa fa-star"></i> Consulting for Start Up Companies </a>
                  <a role="button" className="btn btn-info btn-block btn-lg" href="/home"><i className="fa fa-arrow-circle-up"></i> Consulting for Accelerated Growth </a>
                  <a role="button" className="btn btn-info btn-block btn-lg" href="/home"><i className="fa fa-crosshairs"></i> Consulting for Mission and Strategy </a>
              </div>
            </div>

            <div className="row ">
              <div className="offset-md-5 col-12">
                <h3>How we help you</h3>
              </div>
            </div>

            <div className="row ">
              <div className="col-12 d-flex justify-content-center mb-2">
                <div className="btn-group" role="group">
                  <a role="button" className="btn btn-info btn-lg" href="/home"><i className="fa fa-gavel"></i> Lawyers </a>
                  <a role="button" className="btn btn-info btn-lg" href="/home"><i className="fa fa-sticky-note"></i> Private
                    Equity </a>
                </div>
              </div>
            </div>

              <div className="row">
                  <div className="col-12 d-flex justify-content-center mb-2">
                    <div className="btn-group" role="group">
                      <a role="button" className="btn btn-info btn-lg" href="/home"><i className="fa fa-credit-card"></i> Creditors
                        & Lenders </a>
                    </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12 d-flex justify-content-center mb-2">
                    <div className="btn-group" role="group">
                      <a role="button" className="btn btn-info btn-lg" href="/home"><i className="fa fa-briefcase"></i> Corporate
                        Executives </a>
                    </div>
                  </div>
              </div>



          </div>
        </div>
      </div>
    );
}

export default Home;
