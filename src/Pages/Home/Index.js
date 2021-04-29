import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import bkimg from './asset/background.jpg';
import './index.css'
export default class Index extends Component {
    render() {
        return (
            <>
<div className="authincation h-100"
style={{
    height: "36.5rem !important",
    backgroundImage: "url("+bkimg+")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "44.5rem",
    marginTop:"0px"
}}
>
  <div className="container h-100">
    <div className="row justify-content-center h-100 align-items-center">
      <div className="col-md-5">
        <div className="centerdiv form-input-content text-center error-page">
          <h1 className="error-text font-weight-bold">Poppin</h1>
          <p>Merchant</p>
          <div>
            <NavLink className="btn btn-primary btn-home" to="/login">Login in Account</NavLink>
            <p>Don't have an account? <NavLink className="text-white" to="/sign-up">Sign up</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </>
          );
    }
}
