import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
import { getAllMarchants } from '../../stores/actions/merchant.action'

const Location = ({
    getAllMarchants,
    merchants,
    user
}) => {



    useEffect(() => {
        getAllMarchants(user.auth_token, user.id)
    }, [])


    return (
        <div id="main-wrapper">
            <Header />

            {/***********************************
                 Header start
            ************************************/}
            <div className="header">
                <div className="header-content">
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left">
                                <div className="dashboard_bar">
                                    Add a Location
                        </div>
                            </div>
                            <ul class="navbar-nav header-right">
                                <li class="nav-item dropdown notification_dropdown">
                                    <NavLink to="add-location" className="btn btn-primary">Add a Location</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {/***********************************
                 Header end ti-comment-alt
            ************************************/}
            <Sidebar />
            {/***********************************
      Content body start
  ************************************/}
            <div className="content-body">
                {/* row */}
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-xl-6 col-xxl-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tr>
                                                <td>Restaurants Name</td>
                                                <td>Locations</td>
                                                <td>Edit</td>
                                                <td>Delete</td>
                                            </tr>
                                            {merchants.map((value, index) => {
                                                return (
                                                    <tr>
                                                        <td>{value.name}</td>
                                                        <td>waiting for backend to add this field</td>
                                                        <td><a href=""><i className="fa fa-edit"></i></a></td>
                                                        <td><a href=""><i className="fa fa-trash"></i></a></td>
                                                    </tr>
                                                )
                                            })}
                                            {/* <tr>
                                                <td>Restaurants Name</td>
                                                <td>Locations</td>
                                                <td>Edit</td>
                                                <td>Delete</td>
                                            </tr>
                                            <tr>
                                                <td>Backett's Table</td>
                                                <td>3030 E Indian School Rd, Phoenix, AZ 85018, United States</td>
                                                <td><a href=""><i className="fa fa-edit"></i></a></td>
                                                <td><a href=""><i className="fa fa-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Backett's Table</td>
                                                <td>3030 E Indian School Rd, Phoenix, AZ 85018, United States</td>
                                                <td><a href=""><i className="fa fa-edit"></i></a></td>
                                                <td><a href=""><i className="fa fa-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Backett's Table</td>
                                                <td>3030 E Indian School Rd, Phoenix, AZ 85018, United States</td>
                                                <td><a href=""><i className="fa fa-edit"></i></a></td>
                                                <td><a href=""><i className="fa fa-trash"></i></a></td>
                                            </tr> */}
                                        </table>
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
    )
}

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    merchants: state.merchantReducer.merchants
})

const mapDispatchToProps = {
    getAllMarchants,
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)
