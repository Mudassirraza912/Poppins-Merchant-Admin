import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
export default class Menu extends Component {
    render() {
        return (
            <div id="main-wrapper" className="show">
            <Header/>
            
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
                               <NavLink to="add-menu" className="btn btn-primary">Add Menu</NavLink>
                           </li>
                       </ul>
                   </div>
               </nav>
               </div>
           </div>
           {/***********************************
                Header end ti-comment-alt
           ************************************/}
            <Sidebar/>
   {/***********************************
     Content body start
 ************************************/}
<div className="content-body">
 {/* row */}
 <div className="container-fluid">
 <div className="form-head d-flex mb-3 mb-md-5 align-items-start">
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
                   <td>ID</td>
                   <td>Menu</td>
                   <td>Edit</td>
                   <td>Delete</td>
               </tr>
               <tr>
                   <td>1</td>
                   <td>United States</td>
                   <td><NavLink to="edit-menu"><i className="fa fa-edit"></i></NavLink></td>
                   <td><a href=""><i className="fa fa-trash"></i></a></td>
               </tr>
               <tr>
                   <td>2</td>
                   <td>Phoenix</td>
                   <td><NavLink to="edit-menu"><i className="fa fa-edit"></i></NavLink></td>
                   <td><a href=""><i className="fa fa-trash"></i></a></td>
               </tr>
               <tr>
                   <td>3</td>
                   <td>3030</td>
                   <td><NavLink to="edit-menu"><i className="fa fa-edit"></i></NavLink></td>
                   <td><a href=""><i className="fa fa-trash"></i></a></td>
               </tr>
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


            <Footer/>   
           </div>
        )
    }
}
