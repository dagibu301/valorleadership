import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import ValorProfessionals from './ValorProfessionalsComponent';
import HowWeHelpYou from './HowWeHelpYouComponent';
import ProfessionalServices from './ProfessionalServicesComponent';
import IndustriesServed from './IndustriesServedComponent';
import Awards from './AwardsComponent';
import ContactUs from './ContactUsComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

  render(){
    return(
      <div>
        <Header />
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
              <Route path='/ValorProfessionals' component={ValorProfessionals} />
              <Route path='/HowWeHelpYou' component={HowWeHelpYou} />
              <Route path='/ProfessionalServices' component={ProfessionalServices} />
              <Route path='/IndustriesServed' component={IndustriesServed} />
              <Route path='/Awards' component={Awards} />
              <Route path='/ContactUs' component={ContactUs} />
          </Switch>
          <Footer />
        </div>
      </div>
    );

  }

}

export default withRouter(Main);
