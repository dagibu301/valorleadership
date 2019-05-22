import React, { Component } from 'react';
import { Media, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
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
              <Media object src='/logo2.jpg' alt='logo' />
        </div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav  navbar>
                <NavItem>
                  <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
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
