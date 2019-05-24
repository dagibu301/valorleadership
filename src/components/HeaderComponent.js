import React, { Component } from 'react';
import { Media, Navbar,  Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
      <div>
        <div className="container">
              <Media object src='/assets/images/logo2.jpg' alt='logo' />
        </div>
        <Navbar dark expand="lg">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav  navbar >
                <NavItem className="mr-4 navhead">
                  <NavLink className="nav-link"  to='/home'><span className="fa fa-homea fa-lg"></span> Home </NavLink>
                </NavItem>
                <NavItem className="mr-4">
                  <NavLink className="nav-link"  to='/ValorProfessionals'><span className="fa fa-homea fa-lg"></span> Valor Professionals </NavLink>
                </NavItem>
                <NavItem className="mr-4">
                  <NavLink className="nav-link"  to='/HowWeHelpYou'><span className="fa fa-homea fa-lg"></span> How We Help You </NavLink>
                </NavItem>
                <NavItem className="mr-4">
                  <NavLink className="nav-link"  to='/ProfessionalServices'><span className="fa fa-homea fa-lg"></span> Professional Services </NavLink>
                </NavItem>
                <NavItem className="mr-4">
                  <NavLink className="nav-link"  to='/IndustriesServed'><span className="fa fa-homea fa-lg"></span> Industries Served</NavLink>
                </NavItem>
                <NavItem className="mr-4">
                  <NavLink className="nav-link"  to='/Awards'><span className="fa fa-homea fa-lg"></span> Awards </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink className="nav-link"  to='/ContactUs'><span className="fa fa-homea fa-lg"></span> Contact Us </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>


      </div>
    );
  }

}

export default Header;
