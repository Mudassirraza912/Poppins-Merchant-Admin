import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
export default class Index extends Component {
    render() {
        return (
            <>
<div className="authincation h-100"
style={{
    height: "33rem",
    backgroundImage: "url(asset/background.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}}
>
  <div className="container h-100">
    <div className="row justify-content-center h-100 align-items-center">
      <div className="col-md-5">
        <div className="form-input-content text-center error-page">
          <h1 className="error-text font-weight-bold">400</h1>
          <h4><i className="fa fa-thumbs-down text-danger" /> Bad Request</h4>
          <p>Your Request resulted in an error</p>
          <div>
            <a className="btn btn-primary" href="index.html">Back to Home</a>
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
