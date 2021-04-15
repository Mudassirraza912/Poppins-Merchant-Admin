import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        return (
            <>
             <div className="deznav">
  <div className="deznav-scroll">
    <ul className="metismenu" id="menu">
      <li><NavLink className="" to="/" aria-expanded="false">
          <i className="flaticon-381-layer-1" />
          <span className="nav-text">Add a Location</span>
        </NavLink>
      </li>
      <li><NavLink className="" to="/menu-management" aria-expanded="false">
          <i className="flaticon-381-layer-1" />
          <span className="nav-text">Menu Management</span>
        </NavLink>
      </li>
    </ul>
    
    
  </div>
</div>
   
            </>
        )
    }
}