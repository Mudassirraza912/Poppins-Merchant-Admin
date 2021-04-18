import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
import Dropzone from 'react-dropzone'
import Switch from "react-switch";
export default class AddMenu extends Component {
  constructor(props){
    super(props);
    this.state = { fields: [""] ,checked: false };
  }
  handleChange = (checked) =>{
    this.setState({ checked });
  }
  onClickButtonAdder = (event) =>  {
    event.preventDefault();
    this.setState({
      fields: ["", ...this.state.fields]
    });
  }
  
  onClickFormGroupButton = (index) => {
    let fields = [...this.state.fields];
    fields.splice(index,1);
    this.setState({ fields });
  }
  
  onChangeFormGroupInput(index, event) {
    let fields = [...this.state.fields];
    fields[index] = event.target.value;
    this.setState({ fields });
  }
  
    render() {
      const isFormGroupDeletionAllowed =
    this.state.fields.length > 1 ? true : false;

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
                            <h2>Item Info</h2>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12 mb-2">
                                  <label>Item Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="val-username1"
                                    name="val-username"
                                    placeholder="Enter a username.."
                                  />
                               
                              </div>
                              <div className="col-md-12 mb-2">
                                 <label>Select Category</label>
                                  <select className="form-control">
                                      <option>Soft Drink</option>
                                  </select>
                              </div>
                              <div className="col-md-12 mb-2">
                              <label>Item Customization</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="val-username1"
                                    name="val-username"
                                    placeholder="Enter a username.."
                                  />
                              </div>
                              <div className="col-md-12 mb-2">
    
                              {this.state.fields.map((x, i) => {
                                  return (
                                    <div>
                                       <label>Customization {i == 0 ?"":i}</label>
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-username1"
                                          name="val-username"
                                          placeholder="Enter a username.."
                                          onChange={this.onChangeFormGroupInput.bind(this, i)}
                                        />             
                                      <div className="btn-box">
                                        {this.state.fields.length !== 1 && <a style={{fontSize:"10px",cursor:"pointer"}} className="mr-2" onClick={this.onClickFormGroupButton.bind(i)}> - Remove</a>}
                                        {this.state.fields.length - 1 === i && <a style={{fontSize:"10px",cursor:"pointer"}} onClick={this.onClickButtonAdder} >+ Add Another Field</a>}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              <div className="col-md-12 mb-2">
                              <label>Price</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="val-username1"
                                    name="val-username"
                                    placeholder="Enter a username.."
                                  />
                              </div>
                              <div className="col-md-12 mb-2">
                                <label>Preparation Time</label>
                                  <input
                                    type="time"
                                    className="form-control"
                                    id="val-username1"
                                    name="val-username"
                                    placeholder=""
                                  />
                              </div>
                              <div className="col-md-12 mb-2">
                              <label>
                                <span className=" mr-5">Available in Stock</span>
                                <Switch className="mt-2" onColor="#ffbe00" onChange={this.handleChange} checked={this.state.checked} />
                              </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-xxl-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12 mb-2">
                              <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                    </section>
                                )}
                                </Dropzone>
                              </div>
                              <div className="col-md-12 mb-2">
                                <label>Write Description</label>
                                <textarea rows="10" className="form-control"></textarea>
                              </div>
                              <div className="col-md-12 mb-2 text-right">
                                <button className="btn btn-primary">Save</button>
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
            </div>
          );
    }
}
