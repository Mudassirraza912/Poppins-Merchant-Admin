import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import background from "./Group101.png";
import $ from 'jquery'
export default class Sidebar extends Component {
  componentDidMount(){
    $(".nav-control").on('click', function() {
      console.log('hello')
			$('.deznav').toggleClass("menu-toggle");

			$(".hamburger").addClass("is-active");
		});
  }  
  render() {
        return (
            <>
<div className="deznav" style={{ backgroundImage: `url(${background})`,
backgroundSize: "cover",
backgroundRepeat: "no-repeat",
backgroundColor: "#6905db",
 }}>
  <div className="deznav-scroll">
    <ul className="metismenu" id="menu">
      <li><NavLink className="" to="/add-location" aria-expanded="false">
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
