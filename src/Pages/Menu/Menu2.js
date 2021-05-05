import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getApi } from '../../api/fakeApiUser'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
import base_url from '../../constants/base_url'

const Menu2 = () => {
    let { menuId } = useParams();
    const [items, setItems] = useState([])
    const [categoryForMenu, setCategoryForMenu] = useState([])
    const [loading, setLoading] = useState(false)

    const getItemByMenuId = async () => {
        setLoading(true)
        try {
            const { data, status } = await getApi(`${base_url}/internals/get_all_items/${menuId}`, "")
            if (data.code == 200) {
                setItems(data.payload)
                setLoading(false)
            } else {
                console.log("error", data.message);
                setLoading(false)
            }
        } catch ({ message }) {
            setLoading(false)
            console.log("getItems error", message)

        }
    }

    const getCategoryForMenu = async () => {
        try {
            const { data, status } = await getApi(`${base_url}/internals/get_all_categories/${menuId}`, "")
            if (data.code == 200) {
                setCategoryForMenu(data.payload)
            } else {
                console.log("error", data.message);
            }
        } catch ({ message }) {
            console.log("getItems error", message)

        }
    }

    useEffect(() => {
        getItemByMenuId()
        getCategoryForMenu()
    }, [])

    // console.log(menuId)
    return (
        <div id="main-wrapper" className="show">
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
                                    Menu Managment
                       </div>
                            </div>
                            <ul class="navbar-nav header-right">
                                <li class="nav-item dropdown notification_dropdown">
                                    <NavLink to={`${menuId}/menu-category`} className="btn btn-primary">Add Category</NavLink>
                                </li>
                                <li class="nav-item dropdown notification_dropdown">
                                    <NavLink to={`${menuId}/add-item`} className="btn btn-primary">Add Item</NavLink>
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
                    <div className="search-box form-head d-flex mb-md-5 align-items-start">
                        {/* <div className="mr-auto d-none d-lg-block">
    <h3 className="text-primary font-w600">Welcome to Mediqu!</h3>
    <p className="mb-0">Hospital Admin Dashboard Template</p>
  </div> */}
                        <div className="input-group search-area d-inline-flex">
                            <div className="input-group-append">
                                <a href="javascript:void(0)" className="input-group-text"><i className="flaticon-381-search-2" /></a>
                            </div>
                            <input type="text" className="form-control" placeholder="Search here" />
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-xl-6 col-xxl-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tr>
                                                <th>Products</th>
                                                <th>Category</th>
                                                <th>Price</th>
                                                <th>Prep Time</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>

                                            {(loading ? <p>Please wait...</p> : (
                                                items.length > 0 ? items.map((value, index) => {
                                                    let filterCat = categoryForMenu.filter(x => x.id == value.category_id)
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <div className="table-img">
                                                                    <img height={70} width={70} src="https://image.freepik.com/free-vector/today-s-best-deal-food-social-media-template_126460-82.jpg" />
                                                                    <ul>
                                                                        <li>{value.name}</li>
                                                                        <li>{value.description}</li>
                                                                        {/* <li>20,March 2020, 3:03pm</li> */}
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                            <td>{filterCat[0]?.category_name}</td>
                                                            <td>{value.base_price} USD</td>
                                                            <td>{value.base_prep_time} mins</td>
                                                            <td><NavLink to="edit-item"><i className="fa fa-edit"></i></NavLink></td>
                                                            <td><a href=""><i className="fa fa-trash"></i></a></td>
                                                        </tr>
                                                    )
                                                }) : <p>No Items Found</p>
                                            ))}
                                            {/* <tr>
                                                <td>
                                                    <div className="table-img">
                                                        <img height={70} width={70} src="https://image.freepik.com/free-vector/today-s-best-deal-food-social-media-template_126460-82.jpg" />
                                                        <ul>
                                                            <li>Chicken</li>
                                                            <li>Lorem Ipsum</li>
                                                            <li>20,March 2020, 3:03pm</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>Burger</td>
                                                <td>20 USD</td>
                                                <td>20 mins</td>
                                                <td><NavLink to="edit-item"><i className="fa fa-edit"></i></NavLink></td>
                                                <td><a href=""><i className="fa fa-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="table-img">
                                                        <img height={70} width={70} src="https://image.freepik.com/free-vector/today-s-best-deal-food-social-media-template_126460-82.jpg" />
                                                        <ul>
                                                            <li>Chicken</li>
                                                            <li>Lorem Ipsum</li>
                                                            <li>20,March 2020, 3:03pm</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>Burger</td>
                                                <td>20 USD</td>
                                                <td>20 mins</td>
                                                <td><NavLink to="edit-item"><i className="fa fa-edit"></i></NavLink></td>
                                                <td><a href=""><i className="fa fa-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="table-img">
                                                        <img height={70} width={70} src="https://image.freepik.com/free-vector/today-s-best-deal-food-social-media-template_126460-82.jpg" />
                                                        <ul>
                                                            <li>Chicken</li>
                                                            <li>Lorem Ipsum</li>
                                                            <li>20,March 2020, 3:03pm</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>Burger</td>
                                                <td>20 USD</td>
                                                <td>20 mins</td>
                                                <td><NavLink to="edit-item"><i className="fa fa-edit"></i></NavLink></td>
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
    menu: state.menuReducer.menu
})

const mapDispatchToProps = {
    // getAllMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu2)
