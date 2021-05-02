<<<<<<< HEAD
import React, { Component, useState } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { changePass } from '../../../stores/actions/user.action';
import RenderError from '../../../utils/renderError';
import './index.css'

const NewPassword = ({ location, changePass, history }) => {
  // console.log(location)
  const { detail } = location
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPass, setconfirmPass] = useState("")
  const [confirmPassError, setconfirmPassError] = useState("")

  const validate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    setPasswordError(password ? "" : "Password is required")
    setconfirmPassError(confirmPass ? (password == confirmPass ? "" : "password not matched") : "Confirm password is required")

    if (confirmPass && password) {
      return true

    } else {
      return false
    }
  }

  const handleSubmit = async () => {
    let formStatus = validate()

    if (formStatus) {
      const user = {
        "email": detail.email,
        "password": password,
      }
      let { status } = await changePass(user, detail.token)
      if (status) {
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
                      <h4 className="text-center mb-4 sign-up-text">
                        New Password
                              </h4>
                      <form action="">
                        <div className="row">
                          <div className="col-md-12 mb-5">
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
                                placeholder="New Password"
                                onChange={(e) => {
                                  handleChange(e.target.value, setPassword)
                                }}
                              />
                            </div>
                            <RenderError errorText={passwordError} />
                          </div>
                          <div className="col-md-12 mb-2">
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
                                placeholder="Confirm Password"
                                onChange={(e) => {
                                  handleChange(e.target.value, setconfirmPassError)
                                }}
                              />
=======
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Modal from 'react-modal';
import './index.css'
export default class NewPassword extends Component {
    constructor() {
        super();
        this.state = {
            setIsOpen: false,
            setIsOpen2:false,
            setIsOpen3:false,
            setIsOpen4:false
        }
    }
    openModal() {
        this.setState({ setIsOpen: true })

    }
    openModal02() {
        this.setState({setIsOpen2:true})
    }
    openModal03() {
        this.setState({setIsOpen3:true})
    }
    openModal04() {
        this.setState({setIsOpen4:true})
    }
    closeModal() {
        this.setState({ setIsOpen: false })
        this.setState({ setIsOpen2: false })
        this.setState({ setIsOpen3: false })
        this.setState({ setIsOpen4: false })
        
    }
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
                              <h4 className="text-center mb-4 sign-up-text">
                                New Password
                              </h4>
                              <form action="">
                                <div className="row">
                                <div className="col-md-12 mb-5">
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
                                        placeholder="New Password"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12 mb-2">
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
                                        placeholder="Confirm Password"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-5">
                                  <div className="col-md-12 mb-2 text-center">
                                  <button onClick={(e) => this.openModal()} type="button" 
                                      className="btn btn-primary w-50"
                                    >
                                     Continue
                                    </button>
                                  </div>
                                  </div>
                                <div className="text-center mt-4"></div>
                              </form>
>>>>>>> 9e0f2fc474bd392538a22c2d489071d4934d6e74
                            </div>
                            <RenderError errorText={confirmPassError} />
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-md-12 mb-2 text-center">
                            {/* <NavLink to="/"
                              className="btn btn-primary w-50"
                            > */}
                            <button className="btn btn-primary w-50" onClick={handleSubmit} type="button">
                              Continue
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
<<<<<<< HEAD
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
  // forgetPass
  changePass
=======
             <Modal className="modal-dialog modal-dialog-centered" role="document"
                    isOpen={this.state.setIsOpen}
                    contentLabel="Example Modal"
                    // onRequestClose={(e) => this.closeModal()}
                >
                    <div >
  <div className="modal-content">
    <div className="modal-body">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 289 289">
                      <circle id="Oval" cx="144.5" cy="144.5" r="144.5" fill="#ffbe00"/>
                     </svg>
                </div>
                <div className="col-md-12 text-center">
                    <h3>Password changed</h3>
                    <p style={{
                      fontSize:"10px"
                    }}>you may now continue using Poppins with your new password</p>
                </div>
                <div className="col-md-12 text-center mb-5">
                    <NavLink to="/login" onClick={(e) => this.closeModal()} className="btn btn-primary w-50">Close</NavLink>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>

                </Modal>
            </>
          );
    }
>>>>>>> 9e0f2fc474bd392538a22c2d489071d4934d6e74
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);