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
                    <h2 className="tittles-text">Awards  and Publications</h2>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container homebody tabs">
          <div className="container innerhomebody">

          <div className="row mt-4 ml-4 mr-4">
            <div className="col-12">
              <h2>Awards</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 offset-md-1 col-md-10 mt-3">
              <table class="table  table-bordered table-hover">
                <thead class="thead-dark1">
                  <tr>
                    <th scope="col">Award Title</th>
                    <th scope="col">Prsented By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Proin elementum feugiat risus foin consequat ultricies mi</td>
                    <td>Vitae lacus at diam feugiat</td>
                  </tr>
                  <tr>
                    <td>Etiam eu erat sagittis magna ornare suscipit. Sed sollicitudin neque quis sem</td>
                    <td>Lacus at diam feugiat</td>
                  </tr>
                  <tr>
                    <td>Cras id arcu nec risus posuere tincidunt. Praesent varius congue odio.</td>
                    <td>Atdiam feugiat</td>
                  </tr>

                  <tr>
                    <td>Donec arcu odio, porta vitae, commodo vitae, molestie vel, est.</td>
                    <td>Giam feugiat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row mt-4 ml-4 mr-4">
            <div className="col-12">
              <h2>PUBLICATIONS</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 offset-md-1 col-md-10 mt-3 mb-5">
              <table class="table  table-bordered table-hover">
                <thead class="thead-dark1">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Publicatins</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Proin elementum feugiat risus foin consequat ultricies mi</td>
                    <td>Vitae lacus at diam feugiat</td>
                  </tr>
                  <tr>
                    <td>Etiam eu erat sagittis magna ornare suscipit. Sed sollicitudin neque quis sem</td>
                    <td>Lacus at diam feugiat</td>
                  </tr>
                  <tr>
                    <td>Cras id arcu nec risus posuere tincidunt. Praesent varius congue odio.</td>
                    <td>Atdiam feugiat</td>
                  </tr>

                  <tr>
                    <td>Donec arcu odio, porta vitae, commodo vitae, molestie vel, est.</td>
                    <td>Giam feugiat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          </div>
        </div>
      </div>
  );
}

export default Awards;
