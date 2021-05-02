import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { userRegister } from "../../../stores/actions/user.action";
import RenderError from "../../../utils/renderError";
import img from "./asset/sign-up.png";
import './signup.css'

const Signup = ({
  userRegister,
  history
}) => {
  const [firstName, setFirstName] = useState("")
  const [firstNameError, setFirstNameError] = useState("")
  const [lastName, setLastName] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [phoneNumberError, setPhoneNumberError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const validate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    setFirstNameError(firstName ? "" : "First Name is required")
    setLastNameError(lastName ? "" : "Last Name is required")
    setUsernameError(username ? "" : "Username is required")
    setPhoneNumberError(phoneNumber ? "" : "Phone Number is required")
    setEmailError(email ? (reg.test(email) ? "" : "Email not formatted") : "Email is required")
    setPasswordError(password ? "" : "Password is required")

    if (firstName && lastName && username && email && password, phoneNumber) {
      if (reg.test(email)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  const handleSubmit = async () => {
    let formStatus = validate()

    if (formStatus) {
      const user = {
        "username": username,
        "first_name": firstName,
        "last_name": lastName,
        "password": password,
        "email": email,
        "phone": countryCode + phoneNumber
      }
      let { status } = await userRegister(user)
      if (status) {
        // navigation.navigate("SignIn")
        setFirstName("")
        setLastName("")
        setUsername("")
        setPassword("")
        setEmail("")
        setPhoneNumber("")
        history.push("/")
      }

      // alert("done")
    } else {
      // alert("errors")
      validate()
    }

  }

  const handleChange = (text, func) => {
    func(text)
  }


  return (
    <>
      <div className="img-div">
        <svg xmlns="http://www.w3.org/2000/svg" width="131" height="131" viewBox="0 0 131 131">
          <g id="Oval" fill="none" stroke="#6905db" stroke-miterlimit="10" stroke-width="5">
            <circle cx="65.5" cy="65.5" r="65.5" stroke="none" />
            <circle cx="65.5" cy="65.5" r="63" fill="none" />
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
                                placeholder="First Name"
                                onChange={(e) => {
                                  handleChange(e.target.value, setFirstName)
                                }}
                              />
                            </div>
                            <RenderError errorText={firstNameError} />
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
                                placeholder="Last Name"
                                onChange={(e) => {
                                  handleChange(e.target.value, setLastName)
                                }}
                              />
                            </div>
                            <RenderError errorText={lastNameError} />
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
                                onChange={(e) => {
                                  handleChange(e.target.value, setUsername)
                                }}
                              />
                            </div>
                            <RenderError errorText={usernameError} />
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
                                onChange={(e) => {
                                  handleChange(e.target.value, setEmail)
                                }}
                              />
                            </div>
                            <RenderError errorText={emailError} />
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
                                onChange={(e) => {
                                  handleChange(e.target.value, setPassword)
                                }}
                              />
                            </div>
                            <RenderError errorText={passwordError} />
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
                                onChange={(e) => {
                                  handleChange(e.target.value, setPhoneNumber)
                                }}
                              />
                            </div>
                            <RenderError errorText={phoneNumberError} />
                          </div>
                          <div className="col-md-12 mb-2">
                            <button
                              type="button"
                              className="btn btn-primary btn-block"
                              onClick={handleSubmit}
                            >
                              Sign up
                              </button>
                          </div>
                        </div>
                        <div className="text-center mt-4"></div>
                      </form>
                      <div className="d-flex justify-content-center">
                        <NavLink to="/">Already have an account? Sign in</NavLink>
                      </div>
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
          <circle id="Oval" cx="144.5" cy="144.5" r="144.5" fill="#ffbe00" />
        </svg>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  userRegister
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
