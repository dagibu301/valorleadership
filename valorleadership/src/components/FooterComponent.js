import React, { Component } from 'react';
import { Media, Navbar,  Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';

function Footer () {
  return(
      <div>
        <div className="container homebody">
          <div className="row">
            <div className="col-12 col-md-4">
              <Media object src='/turnaroundassociation.jpg' alt='turn-around-association-logo' />
            </div>


            <div className="col-12 col-md-8">
              <div className="row">

                        <div className="col-12">
                          <div className="btn-group" role="group">
                            <a role="button" className="btn  btn-md" href="/home"> Home </a>
                            <a role="button" className="btn  btn-md" href="/ValorProfessionals"> Valor Professionals </a>
                            <a role="button" className="btn  btn-md" href="/HowWeHelpYou"> How We Help You </a>
                          </div>
                        </div>
              </div>
              <div className="row">
                        <div className="col-12 ">
                          <div className="btn-group" role="group">
                            <a role="button" className="btn  btn-md" href="/ProfessionalServices"> Professional Services </a>
                            <a role="button" className="btn  btn-md" href="/IndustriesServed"> Industries Served </a>
                            <a role="button" className="btn  btn-md" href="/Awards"> Awards </a>
                            <a role="button" className="btn  btn-md d-none d-sm-block" href="/ContactUs"> Contact Us </a>
                          </div>
                        </div>
              </div>

              <div className="row">
                        <div className="col-12 ">
                          <div className="btn-group" role="group">
                            <a role="button" className="btn  btn-md d-block d-sm-none" href="/ContactUs"> Contact Us </a>
                          </div>
                        </div>
              </div>

              <div className="row">
                        <div className="col-12">
                            <p> © 2019 Copyright,<b> Valor Leadership Partners LLC,</b> All rights reserved</p>                        
                        </div>
              </div>


            </div>

          </div>


        </div>
      </div>
  );
}

export default Footer;
