import React, { Component } from "react";
import img from "./asset/sign-up.png";
import './signup.css'
export default class Signup extends Component {
  render() {
    return (
      <>
      <div className="img-div">
      <svg xmlns="http://www.w3.org/2000/svg" width="131" height="131" viewBox="0 0 131 131">
        <g id="Oval" fill="none" stroke="#6905db" stroke-miterlimit="10" stroke-width="5">
            <circle cx="65.5" cy="65.5" r="65.5" stroke="none"/>
            <circle cx="65.5" cy="65.5" r="63" fill="none"/>
        </g>
        </svg>

      </div>
        <div className="authincation h-100">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-md-6">
                <div className="authincation-content">
                  <div className="row no-gutters">
                    <div className="col-xl-12">
                      <div className="auth-form">
                        <h4 className="text-left mb-4 sign-up-text">
                          Sign up
                        </h4>
                        <form action="">
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    {" "}
                                    <i class="fa fa-user"></i>{" "}
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-username1"
                                  name="val-username"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    {" "}
                                    <i class="fa fa-user"></i>{" "}
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-username1"
                                  name="val-username"
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    {" "}
                                    <i class="fa fa-envelope"></i>{" "}
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-username1"
                                  name="val-username"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    {" "}
                                    <i class="fa fa-lock"></i>{" "}
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-username1"
                                  name="val-username"
                                  placeholder="Password"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    {" "}
                                    <i class="fa fa-phone"></i>{" "}
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-username1"
                                  name="val-username"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <button
                                type="submit"
                                className="btn btn-primary btn-block"
                              >
                                Sign up
                              </button>
                            </div>
                          </div>
                          <div className="text-center mt-4"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="img-div-2">
         <svg xmlns="http://www.w3.org/2000/svg" width="289" height="289" viewBox="0 0 289 289">
            <circle id="Oval" cx="144.5" cy="144.5" r="144.5" fill="#ffbe00"/>
         </svg>
      </div>
      </>
    );
  }
}
