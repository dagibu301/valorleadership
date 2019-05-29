import React from 'react';

function HowWeHelpYou () {
  return(
      <div>
        <div className="home-background">
          <div className="container homebackcontainer">
            <div className="row align-items-start">
              <div className="col-12">
                <div className=" tittles">
                    <picture>
                      <source media="(max-width: 575px)" srcset="/assets/images/our_clients.jpg" />
                      <source media="(max-width: 768px)" srcset="/assets/images/our_clients.jpg" />
                      <source media="(max-width: 991px)" srcset="/assets/images/our_clients.jpg" />
                      <source media="(max-width: 1199px)" srcset="/assets/images/our_clients.jpg" />
                      <img src="/assets/images/our_clients.jpg"  />
                    </picture>
                    <h2 className="tittles-text">How We Help You</h2>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container homebody tabs">
          <div className="container innerhomebody">

            <div className="row d-none d-sm-block ">
              <div className="col-12 d-flex justify-content-center ">
                <div className="btn-group mb-4" role="group">
                  <a role="button" className="btn btn-light btn-lg" href="#lawyers"><i className="fa fa-gavel"></i> Corporate Lawyers </a>
                  <a role="button" className="btn btn-light btn-lg" href="#equity"><i className="fa fa-sticky-note"></i> Private
                    Equity </a>
                  <a role="button" className="btn btn-light btn-lg" href="#creditors"><i className="fa fa-credit-card"></i> Creditors
                      & Lenders </a>
                  <a role="button" className="btn btn-light btn-lg" href="#corporate"><i className="fa fa-briefcase"></i> Corporate
                        Executives </a>
                </div>
              </div>
            </div>

            <div className="container mt-4" id="lawyers">
              <h2>Lawyers</h2>
              <p>Valor Leadership Partners continually seeks relationships with great lawyers in order to help our clients. We will often recommend attorneys when we see our clients need assistance in the following areas:</p>
              <ul className="pb-2">
                <li><b>Acquisitions and Divestitures</b></li>
                <li><b>Bankruptcy Advic</b></li>
                <li><b>Legal Agreements</b></li>
                <li><b>Legal Agreements</b></li>
              </ul>
              <p>Conversely, lawyers are often the first outside professionals to become aware when their clients need business consulting. While attorneys provide valuable legal advice, the client often needs concrete business consulting on a variety of issues to get to the root cause of issues such as cash flow problems, operational issues, obstacles to growth, etc. Often the lender to the client will insist on a turnaround consultant if the cash flow situation deteriorates past a certain point. The legal team can greatly assist their clients by recommending an effective consultant.</p>

              <p>When recommending another professional, it is essential that there be mutual respect and confidence. We invite relationships with law firms to help us build that mutual confidence. Our reputation is such that when we enter a situation, we are able to provide effective advice at a competitive cost. One of our core values is to provide a significant value proposition for the client. We look forward to building relationships with great attorneys so we can work together to build value for our clients.</p>
              <hr className="mt-5 mb-5" />
            </div>

            <div className="container" id="equity">
              <h2>Private Equity</h2>
              <p>Proin elementum feugiat risus. Proin consequat ultricies mi. Donec vitae lacus at diam feugiat nonummy. Nulla facilisis laoreet ipsum. Cras id arcu nec risus posuere tincidunt. Praesent varius congue odio. Duis a nisl ut neque congue mattis. Pellentesque porttitor tortor at metus. Duis eros. Donec arcu odio, porta vitae, commodo vitae, molestie vel, est. Sed tincidunt gravida quam. Fusce malesuada pretium purus. In leo. Nullam porta bibendum sem. Suspendisse potenti. Phasellus vitae eros. Aliquam cursus tristique urna. Etiam eu erat sagittis magna ornare suscipit. Sed sollicitudin neque quis sem. Morbi nec pede.</p>
              <hr className="mt-5 mb-5" />
            </div>

            <div className="container" id="creditors">
              <h2>Lenders and Creditors</h2>
              <p>This part to be filled in with help from Dick</p>
              <hr className="mt-5 mb-5" />
            </div>

            <div className="container" id="corporate">
              <h2>Corporate Executives</h2>
              <p>When corporate executives face difficulties that require a consultant, they need honest feedback. A consultant who can find the critical drivers of the business and determine the root cause of the problems is an invaluable resource. Valor professionals bring creative solutions to help navigate in difficult times.</p>
              <hr className="mt-5 mb-5"  />
            </div>



          </div>
        </div>
      </div>
  );
}

export default HowWeHelpYou;
