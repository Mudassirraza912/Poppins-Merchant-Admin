import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
               
  {/***********************************
      Nav header start
  ************************************/}
  <div className="nav-header">
    <a href="" className="text-center brand-logo">
      {/* <img className="logo-abbr" src="images/logo.png" alt="" />
      <img className="logo-compact" src="images/logo-text.png" alt="" />
      <img className="brand-title" src="images/logo-text.png" alt="" /> */}
      <h2>Poppins <span className="text-center">Merchant</span></h2>
    </a>
    <div className="nav-control">
      <div className="d-md-none hamburger">
        <span className="line" /><span className="line" /><span className="line" />
      </div>
    </div>
  </div>
  

 
            </>
        )
    }
}
