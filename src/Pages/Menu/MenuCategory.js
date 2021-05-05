import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
import { addMenuCategory } from '../../stores/actions/menu.action'

const MenuCategory = ({
  user,
  addMenuCategory
}) => {
  let { menuId } = useParams();
  const history = useHistory()
  const [name, setName] = useState('')

  // console.log("id from category", menuId)

  const handleSubmit = async () => {
    if (name) {
      const details = {
        "menu_id": menuId,
        "name": name
      }
      const { status } = await addMenuCategory(details)
      if (status) {
        history.goBack()
      }
    } else {
      swal("Error", "Name is required", "error")
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
                          placeholder="Enter name"
                          onChange={(e) => setName(e.target.value)}
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
  // getAllMenu
  addMenuCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuCategory)
