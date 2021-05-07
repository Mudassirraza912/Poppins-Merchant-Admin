import React, { Component, useEffect, useState } from "react";
import { CustomModal } from "../../Component/CustomModal";
import { NavLink, useHistory } from 'react-router-dom'

import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import Sidebar from "../../Component/Sidebar";
import Modal from 'react-modal';
import { connect } from "react-redux";
import RenderError from "../../utils/renderError";
import { marchantRegister } from "../../stores/actions/merchant.action";
import { getAllMenu } from "../../stores/actions/menu.action";

const AddLocation = ({
  user,
  marchantRegister,
  getAllMenu,
  allMenu
}) => {
  // constructor() {
  //         super();
  //         this.state = {
  //             setIsOpen: false,
  //             setIsOpen2:false,
  //             setIsOpen3:false,
  //             setIsOpen4:false,
  //             name: "",
  //             nameError: "",

  //         }
  //     }
  const [setIsOpen, setIsOpenVal] = useState("")
  const [setIsOpen2, setIsOpen2val] = useState("")
  const [setIsOpen3, setIsOpen3val] = useState("")
  const [setIsOpen4, setIsOpen4val] = useState("")

  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneNumberError, setPhoneNumberError] = useState("")
  const [type, setType] = useState("testType")
  const [typeError, setTypeError] = useState("")
  const [address, setAddress] = useState("")
  const [addressError, setAddressError] = useState("")
  const [chain, setChain] = useState("")
  const [chainError, setChainError] = useState("")
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [password, setpassword] = useState("")
  const [passwordError, setpasswordError] = useState("")
  const [menu, setmenu] = useState("")
  const [menuError, setmenuError] = useState("")
  const [description, setdescription] = useState("")
  const [descriptionError, setdescriptionError] = useState("")

  const history = useHistory()

  useEffect(() => {
    getAllMenu(user.id)
  }, [])

  const validate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    setTypeError(type ? "" : "Type is required")
    setNameError(name ? "" : "Resturant Name is required")
    setPhoneNumberError(phoneNumber ? "" : "Phone Number is required")
    setdescriptionError(description ? "" : "description is required")
    setUsernameError(username ? "" : "Username is required")
    setEmailError(email ? (reg.test(email) ? "" : "Invalid email") : "Email is required")
    setpasswordError(password ? "" : "Password is required")

    if (username && password && type && name && phoneNumber && description && email) {
      return true

    } else {
      return false
    }
  }

  const handleSubmit = async () => {
    let formStatus = validate()

    if (formStatus) {
      const marchantDetails = {
        "owner_id": user.id,
        "type": type,
        "name": name,
        "description": description,
        "username": username,
        "email": email,
        "phone": phoneNumber,
        "password": password
      }
      console.log(marchantDetails)
      let { status } = await marchantRegister(marchantDetails)
      if (status) {
        history.push("/Home")
        // setModal(true)
      }

      // alert("done")
    } else {
      // alert("errors")
      validate()
    }

  }

  function openModal() {
    // this.setState({ setIsOpen: true })
    setIsOpenVal(true)
  }

  const handleChange = (text, func) => {
    func(text)
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
                    <h2>Location Info</h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="31.477"
                                height="26.648"
                                viewBox="0 0 31.477 26.648"
                              >
                                <path
                                  id="Icon_map-food"
                                  data-name="Icon map-food"
                                  d="M32.127,9.937l-2.58,19.535H20.831L18.261,9.84H28.9L31,2.825l1.192.347L30.179,9.923l1.948.015Zm-15.1,11.3s.326-2.533-4.194-2.533h-7.2c-4.513,0-4.194,2.533-4.194,2.533H17.029Zm-15.585,5.7s-.319,2.533,4.194,2.533h7.2c4.52,0,4.194-2.533,4.194-2.533H1.444Zm14.909-1.267a1.606,1.606,0,0,0,0-3.167H2.058a1.606,1.606,0,0,0,0,3.167h14.3Z"
                                  transform="translate(-0.72 -2.825)"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Restaurant Name"
                            value={name}
                            onChange={e => handleChange(e.target.value, setName)}
                          />
                        </div>
                        <RenderError errorText={nameError} />
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <i class="fa fa-phone" style={{ fontSize: 22, opcaity: 0.39 }}></i>{" "}
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={e => handleChange(e.target.value, setPhoneNumber)}
                          />
                        </div>
                        <RenderError errorText={phoneNumberError} />
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="17.6"
                                viewBox="0 0 22 17.6"
                              >
                                <path
                                  id="Icon_material-email"
                                  data-name="Icon material-email"
                                  d="M22.8,6H5.2A2.2,2.2,0,0,0,3.011,8.2L3,21.4a2.206,2.206,0,0,0,2.2,2.2H22.8A2.206,2.206,0,0,0,25,21.4V8.2A2.206,2.206,0,0,0,22.8,6Zm0,4.4L14,15.9,5.2,10.4V8.2L14,13.7l8.8-5.5Z"
                                  transform="translate(-3 -6)"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Email"
                            value={email}
                            onChange={e => handleChange(e.target.value, setEmail)}
                          />
                        </div>
                        <RenderError errorText={emailError} />
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21.6"
                                height="34.56"
                                viewBox="0 0 21.6 34.56"
                              >
                                <path
                                  id="Icon_map-restaurant"
                                  data-name="Icon map-restaurant"
                                  d="M15.84,1.391V9.36H14.4V1.44a.72.72,0,1,0-1.44,0V9.36H11.52V1.414a.722.722,0,0,0-1.44-.024V9.36H8.64V1.447A.72.72,0,0,0,7.2,1.408v10.42a2.716,2.716,0,0,0,2.88,2.493v18.8a2.16,2.16,0,1,0,4.32,0v-18.8c1.44,0,2.88-1.2,2.88-2.323V1.414a.722.722,0,0,0-1.44-.023ZM22.32,3.6v18h1.44V33.12c0,2.88,5.04,2.88,5.04,0V3.6C28.8,0,22.32,0,22.32,3.6Z"
                                  transform="translate(-7.2 -0.72)"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Type"
                            value={type}
                            disabled
                            onChange={e => handleChange(e.target.value, setType)}
                          />
                        </div>
                        <RenderError errorText={typeError} />
                      </div>
                      {/* <div className="col-md-12 mb-2">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24.576"
                                height="24.577"
                                viewBox="0 0 24.576 24.577"
                              >
                                <path
                                  id="Icon_awesome-location-arrow"
                                  data-name="Icon awesome-location-arrow"
                                  d="M21.337.169,1.38,9.38A2.327,2.327,0,0,0,2.3,13.832h8.444v8.444A2.327,2.327,0,0,0,15.2,23.2L24.408,3.24A2.4,2.4,0,0,0,21.337.169Z"
                                  transform="translate(0 0)"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Store Address"
                            value={address}
                            onChange={e => handleChange(e.target.value, setAddress)}
                          />
                        </div>
                        <RenderError errorText={addressError} />
                      </div> */}
                      {/* <div className="col-md-12 mb-2">
                        <select onChange={(e) => openModal()} className="form-control">
                          <option value="">Chain</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div> */}
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.5"
                                height="25.667"
                                viewBox="0 0 25.5 25.667"
                              >
                                <path
                                  id="Icon_awesome-user-alt"
                                  data-name="Icon awesome-user-alt"
                                  d="M12.75,14.438A7.219,7.219,0,1,0,5.578,7.219,7.2,7.2,0,0,0,12.75,14.438Zm6.375,1.6H16.381a8.619,8.619,0,0,1-7.262,0H6.375A6.4,6.4,0,0,0,0,22.458v.8a2.4,2.4,0,0,0,2.391,2.406H23.109A2.4,2.4,0,0,0,25.5,23.26v-.8A6.4,6.4,0,0,0,19.125,16.042Z"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Username"
                            value={username}
                            onChange={e => handleChange(e.target.value, setUsername)}
                          />
                        </div>
                        <RenderError errorText={usernameError} />
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19.5"
                                height="22.286"
                                viewBox="0 0 19.5 22.286"
                              >
                                <path
                                  id="Icon_awesome-lock"
                                  data-name="Icon awesome-lock"
                                  d="M17.411,9.75H16.366V6.616a6.616,6.616,0,1,0-13.232,0V9.75H2.089A2.09,2.09,0,0,0,0,11.839V20.2a2.09,2.09,0,0,0,2.089,2.089H17.411A2.09,2.09,0,0,0,19.5,20.2V11.839A2.09,2.09,0,0,0,17.411,9.75Zm-4.527,0H6.616V6.616a3.134,3.134,0,1,1,6.268,0Z"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Password"
                            value={password}
                            onChange={e => handleChange(e.target.value, setpassword)}
                          />
                        </div>
                        <RenderError errorText={passwordError} />
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="17"
                                viewBox="0 0 24 17"
                              >
                                <g
                                  id="Icon_feather-menu"
                                  data-name="Icon feather-menu"
                                  transform="translate(-3 -7.5)"
                                  opacity="0.3"
                                >
                                  <path
                                    id="Path_35"
                                    data-name="Path 35"
                                    d="M4.5,18h21"
                                    transform="translate(0 -2)"
                                    fill="none"
                                    stroke="#000"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                  />
                                  <path
                                    id="Path_36"
                                    data-name="Path 36"
                                    d="M4.5,9h21"
                                    fill="none"
                                    stroke="#000"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                  />
                                  <path
                                    id="Path_37"
                                    data-name="Path 37"
                                    d="M4.5,27h21"
                                    transform="translate(0 -4)"
                                    fill="none"
                                    stroke="#000"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                  />
                                </g>
                              </svg>{" "}
                            </span>
                          </div>
                          <select className="form-control">
                            <option value="">Select Menu</option>
                            {allMenu.map((value, index) => {
                              return (
                                <option value={value.id}>{value.description}</option>
                              )
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          <div
                            style={{
                              display: "block",
                            }}
                            className="input-group-prepend"
                          >
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="30"
                                viewBox="0 0 24 30"
                              >
                                <path
                                  id="Icon_material-description"
                                  data-name="Icon material-description"
                                  d="M21,3H9A3,3,0,0,0,6.015,6L6,30a3,3,0,0,0,2.985,3H27a3.009,3.009,0,0,0,3-3V12Zm3,24H12V24H24Zm0-6H12V18H24Zm-4.5-7.5V5.25l8.25,8.25Z"
                                  transform="translate(-6 -3)"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div>
                          <textarea
                            rows="10"
                            className="form-control"
                            placeholder="Description"
                            value={description}
                            onChange={e => handleChange(e.target.value, setdescription)}
                          ></textarea>
                        </div>
                        <RenderError errorText={descriptionError} />
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
                    <h2>Address Info</h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          {/* <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.667"
                                height="23.888"
                                viewBox="0 0 22.667 23.888"
                              >
                                <path
                                  id="Icon_material-account-balance"
                                  data-name="Icon material-account-balance"
                                  d="M5.386,11.738V19.7H8.965V11.738Zm7.158,0V19.7h3.579V11.738ZM3,25.388H25.667V21.975H3Zm16.7-13.65V19.7h3.579V11.738ZM14.333,1.5,3,7.188V9.463H25.667V7.188Z"
                                  transform="translate(-3 -1.5)"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div> */}
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Street"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          {/* <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.794"
                                height="24.924"
                                viewBox="0 0 25.794 24.924"
                              >
                                <path
                                  id="Icon_metro-list-numbered"
                                  data-name="Icon metro-list-numbered"
                                  d="M13.1,22.179h17.2v3.116H13.1Zm0-9.347h17.2v3.116H13.1Zm0-9.347h17.2V6.6H13.1ZM7.938,1.928V8.159H6.218V3.486H4.5V1.928Zm-1.72,12.8v1.217H9.657v1.558H4.5V13.952l3.439-1.46V11.275H4.5V9.717H9.657v3.554Zm3.439,4.333v7.789H4.5V25.295H7.938V23.737H4.5V22.179H7.938V20.621H4.5V19.063Z"
                                  transform="translate(-4.499 -1.928)"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div> */}
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          {/* <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.794"
                                height="24.924"
                                viewBox="0 0 25.794 24.924"
                              >
                                <path
                                  id="Icon_metro-list-numbered"
                                  data-name="Icon metro-list-numbered"
                                  d="M13.1,22.179h17.2v3.116H13.1Zm0-9.347h17.2v3.116H13.1Zm0-9.347h17.2V6.6H13.1ZM7.938,1.928V8.159H6.218V3.486H4.5V1.928Zm-1.72,12.8v1.217H9.657v1.558H4.5V13.952l3.439-1.46V11.275H4.5V9.717H9.657v3.554Zm3.439,4.333v7.789H4.5V25.295H7.938V23.737H4.5V22.179H7.938V20.621H4.5V19.063Z"
                                  transform="translate(-4.499 -1.928)"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div> */}
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="State"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          {/* <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.794"
                                height="24.924"
                                viewBox="0 0 25.794 24.924"
                              >
                                <path
                                  id="Icon_metro-list-numbered"
                                  data-name="Icon metro-list-numbered"
                                  d="M13.1,22.179h17.2v3.116H13.1Zm0-9.347h17.2v3.116H13.1Zm0-9.347h17.2V6.6H13.1ZM7.938,1.928V8.159H6.218V3.486H4.5V1.928Zm-1.72,12.8v1.217H9.657v1.558H4.5V13.952l3.439-1.46V11.275H4.5V9.717H9.657v3.554Zm3.439,4.333v7.789H4.5V25.295H7.938V23.737H4.5V22.179H7.938V20.621H4.5V19.063Z"
                                  transform="translate(-4.499 -1.928)"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div> */}
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Country"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="input-group">
                          {/* <div className="input-group-prepend">
                            <span className="input-group-text">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25.794"
                                height="24.924"
                                viewBox="0 0 25.794 24.924"
                              >
                                <path
                                  id="Icon_metro-list-numbered"
                                  data-name="Icon metro-list-numbered"
                                  d="M13.1,22.179h17.2v3.116H13.1Zm0-9.347h17.2v3.116H13.1Zm0-9.347h17.2V6.6H13.1ZM7.938,1.928V8.159H6.218V3.486H4.5V1.928Zm-1.72,12.8v1.217H9.657v1.558H4.5V13.952l3.439-1.46V11.275H4.5V9.717H9.657v3.554Zm3.439,4.333v7.789H4.5V25.295H7.938V23.737H4.5V22.179H7.938V20.621H4.5V19.063Z"
                                  transform="translate(-4.499 -1.928)"
                                  fill="#6a6d78"
                                  opacity="0.39"
                                />
                              </svg>{" "}
                            </span>
                          </div> */}
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Zip Code"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-2 text-left mt-4">
                        <button onClick={() => {
                          handleSubmit()
                        }} className="btn btn-primary w-50">
                          Proceed
                          </button>
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
      <Modal className="modal-dialog modal-dialog-centered" role="document"
        isOpen={setIsOpen}
        contentLabel="Example Modal"
      // onRequestClose={(e) => this.closeModal()}
      >
        <div >
          <div className="modal-content">
            <div className="container-fluid">

              <div className="row">
                <div style={{ marginBottom: "0px", padding: "24px 27px 9px", }} className="col-md-12 text-left border mb-4">
                  <a href=""> Mc Donalds</a>
                </div>
                <div style={{ marginBottom: "0px", padding: "24px 27px 9px", }} className="col-md-12 text-left border mb-4">
                  <a href=""> Mc Donalds</a>
                </div>
                <div style={{ marginBottom: "0px", padding: "24px 27px 9px", }} className="col-md-12 text-left border mb-4">
                  <a href=""> Mc Donalds</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  merchants: state.merchantReducer.merchants,
  allMenu: state.menuReducer.menu
})

const mapDispatchToProps = {
  marchantRegister,
  getAllMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation)