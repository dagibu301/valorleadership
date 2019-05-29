import React from 'react';

function Awards () {
  return(
      <div>
        <div className="home-background">
          <div className="container homebackcontainer">
            <div className="row align-items-start">
              <div className="col-12">
                <div className=" tittles">
                    <picture>
                      <source media="(max-width: 575px)" srcset="/assets/images/banner2.jpg" />
                      <source media="(max-width: 768px)" srcset="/assets/images/banner2.jpg" />
                      <source media="(max-width: 991px)" srcset="/assets/images/banner2.jpg" />
                      <source media="(max-width: 1199px)" srcset="/assets/images/banner2.jpg" />
                      <img src="/assets/images/banner2.jpg"  />
                    </picture>
                    <h2 className="tittles-text">Awards</h2>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container homebody tabs">
          <div className="container innerhomebody">
            <h2>Awards</h2>

          </div>
        </div>
      </div>
  );
}

export default Awards;
