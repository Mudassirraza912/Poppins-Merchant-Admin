import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
import { addMenu, getAllMenu } from '../../stores/actions/menu.action'

const AddBaseMenu = ({
    user,
    addMenu
}) => {
    const history = useHistory()
    const [description, setDescription] = useState("")

    const handleSubmit = async () => {
        if (description) {
            const details = {
                "owner_id": user.id,
                "description": description
            }
            const { status } = await addMenu(details)
            if (status) { 
                history.push("/menu-management")
            }
        } else {
            swal("Error", "description is required", "error")
        }
    }

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
                                        <h2>Add Menu</h2>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 mb-2">
                                                <label className="text-dark">Menu Description</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="val-username1"
                                                    name="val-username"
                                                    placeholder="Description"
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />

                                            </div>
                                            <div className="col-md-9 mt-2 mb-2 text-right">
                                                <button onClick={handleSubmit} className="btn btn-primary w-100">Add</button>
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

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    menu: state.menuReducer.menu
})

const mapDispatchToProps = {
    getAllMenu,
    addMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBaseMenu)
