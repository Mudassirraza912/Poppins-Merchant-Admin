import React, { Component, useState } from 'react'
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'
import RenderError from '../../../utils/renderError';
import { forgetPass } from '../../../stores/actions/user.action'
import './index.css'

const ForgetPswd = ({
  forgetPass
}) => {
  const [email, setemail] = useState("")
  const [emailError, setemailError] = useState("")
  const history = useHistory()
  const validate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    setemailError(email ? (reg.test(email) ? "" : "invalid email") : "Email is required")

    if (email) {
      return true

    } else {
      return false
    }
  }

  const handleSubmit = async () => {
    let formStatus = validate()

    if (formStatus) {
      const user = {
        "email": email,
      }
      let { status, data } = await forgetPass(user)
      if (status) {
        console.log("data", data)
        history.push({
          pathname: "/new-password",
          state: { detail: data }
        })
      }

      // alert("done")
    } else {
      // alert("errors")
      validate()
    }

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
                        Forget Password
                              </h4>
                      <form action="">
                        <div className="row">
                          <div className="col-md-12 mb-2">
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
                                onChange={e => setemail(e.target.value)}
                              />
                            </div>
                            <RenderError errorText={emailError} />
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-md-12 mb-2 text-right">
                            {/* <NavLink
                              // to="/verification"
                              to={null}
                              onClick={handleSubmit}
                              className="btn btn-primary w-50"
                            > */}
                            <button
                            type="button"
                            onClick={handleSubmit}
                            className="btn btn-primary w-50">
                              Submit
                            </button>
                            {/* </NavLink> */}
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
          <circle id="Oval" cx="144.5" cy="144.5" r="144.5" fill="#ffbe00" />
        </svg>
      </div>
    </>
  );
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  forgetPass
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPswd);