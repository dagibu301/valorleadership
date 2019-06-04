import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label,  Col, Row} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactUs extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
      console.log('Current State is: ' + JSON.stringify(values));

      alert('Current State is: ' + JSON.stringify(values));
  }
  render () {
    return(
        <div>
          <div className="home-background">
            <div className="container homebackcontainer">
              <div className="row align-items-start">
                <div className="col-12">
                  <div className=" tittles">
                      <picture>
                        <source media="(max-width: 575px)" srcset="/assets/images/customer.jpg" />
                        <source media="(max-width: 768px)" srcset="/assets/images/customer.jpg" />
                        <source media="(max-width: 991px)" srcset="/assets/images/customer.jpg" />
                        <source media="(max-width: 1199px)" srcset="/assets/images/customer.jpg" />
                        <img src="/assets/images/customer.jpg"  />
                      </picture>
                      <h2 className="tittles-text">Contact Us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="container homebody tabs">
            <div className="container innerhomebody">
              <div className="row mt-4 ml-4 mr-4">
                <div className="col-12">
                  <p>You can contact us directly by calling the cell phone below.</p>
                  <hr />
                  <p>OR Send an email or use the form below and we will get back to you as soon as we can. </p>
                </div>
              </div>

              <div className="row mt-4 ml-4 mr-4">
                <div className="col-4 col-md-3 col-lg-2 ml-4">
                  <img src="/assets/images/anthony_alaimo.jpg" alt="Anthony Alaimo" />
                </div>
                <div className="col-7 col-md-7 col-lg-4">
                  <h2>Anthony Alaimo, CTP</h2>
                  <p>120 Millbrook Village Dr, Suite E, Tyrone, GA 30290</p>

                    <p><b>Phone:</b> 404-667-1430 <br />
                    <b>Fax:</b> 801-760-1146 <br />
                    <b>Email:</b> ala@valorleadership.com</p>
                </div>
              </div>

              <div className="row mt-4 ml-4 mr-4 ">
                <div className="col-12 offset-md-1 col-md-10 mb-4 innerhomebody border border-info rounded p-5  ">
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>


                    <Row className="form-group">
                        <Label htmlFor="fullname" md={2}>Full Name</Label>
                        <Col md={10}>
                            <Control.text model=".fullname" id="fullname" name="fullname"
                                placeholder="Fill Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                             />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                        <Col md={10}>
                            <Control.text model=".telnum" id="telnum" name="telnum"
                                placeholder="Tel. Number"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 numbers',
                                    maxLength: 'Must be 15 numbers or less',
                                    isNumber: 'Must be a number'
                                }}
                             />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Email"
                                className="form-control"
                                validators={{
                                    required, validEmail
                                }}
                                 />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid Email Address'
                                }}
                             />
                        </Col>
                    </Row>

                     <Row className="form-group">
                         <Label htmlFor="message" md={2}>Your Message</Label>
                         <Col md={10}>
                             <Control.textarea model=".message" id="message" name="message"
                                 rows="6"
                                 className="form-control" />
                         </Col>
                     </Row>
                     <Row className="form-group">
                         <Col md={{size:10, offset: 2}}>
                             <Button type="submit" color="primary">
                             Send Now
                             </Button>
                         </Col>
                     </Row>
                 </LocalForm>

                </div>
              <div>




            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ContactUs;
