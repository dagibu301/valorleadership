import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

  render(){
    return(
      <div>
        <Header />
        <div>
          <Switch>
              <Route path='/home' component={Home} />

          </Switch>
        </div>
      </div>
    );

  }

}

export default Main;
