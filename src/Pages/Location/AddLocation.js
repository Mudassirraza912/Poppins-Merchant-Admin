import React, { Component } from "react";

import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import Sidebar from "../../Component/Sidebar";
export default class AddLocation extends Component {
  render() {
    return (
      <div id="">
        <Header />
        <Sidebar />
        {/***********************************
      Content body start
  ************************************/}
        <div className="content-body">
          {/* row */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-xxl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center mb-5">
                      <h2>Location Info</h2>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 mb-2">
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
                              placeholder="Enter a username.."
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
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
                              placeholder="Enter a username.."
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
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
                              placeholder="Enter a username.."
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
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
                              placeholder="Enter a username.."
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <select className="form-control">
                            <option value="">Chain</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                        <div className="col-md-12 mb-2">
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
                              placeholder="Enter a username.."
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
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
                              placeholder="Enter a username.."
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <select className="form-control">
                            <option value="">Select Menu</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                        <div className="col-md-12 mb-2">
                          <textarea
                            rows="10"
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center mb-5">
                      <h2>Bank Info</h2>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 mb-2">
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
                              placeholder="Enter a username.."
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
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
                              placeholder="Enter a username.."
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
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
                              placeholder="Enter a username.."
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-2 text-right">
                          <button className="btn btn-primary">Proceed</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/***********************************
      Content body end
  ************************************/}

        <Footer />
      </div>
    );
  }
}
