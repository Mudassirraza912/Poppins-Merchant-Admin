import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
export default class MenuCategory extends Component {
  constructor(props){
    super(props);
  }
  
    render() {
        return (
            <div id="main-wrapper">
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
                            <h2>Menu Category</h2>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12 mb-2">
                                  <label className="text-dark">Category Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="val-username1"
                                    name="val-username"
                                    placeholder=""
                                  />
                               
                              </div>
                              <div className="col-md-9 mt-2 mb-2 text-right">
                                <button className="btn btn-primary w-100">Add</button>
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
