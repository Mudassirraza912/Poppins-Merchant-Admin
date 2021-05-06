import React, { Component } from 'react'
import { NavLink, useParams, withRouter } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
import Dropzone from 'react-dropzone'
import Switch from "react-switch";
import './Menu.css'
import base_url from '../../constants/base_url'
import { getApi } from '../../api/fakeApiUser'
import { connect } from 'react-redux'


class AddMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [""],
      checked: false,
      fields2: [""],
      checked2: false,
      show: false,

      itemName: "",
      selectedCategory: null,
      prize: "",
      preperationTime: "",
      description: "",

      allCategories: [],
      allOptions: [],
      customizationList: [
        {
          name: "",
          is_required: true,
          option_type_id: 0,
          customization_values: [
            {
              name: "",
              price: ""
            },
            {
              name: "",
              price: ""
            },
            {
              name: "",
              price: ""
            },
          ]
        }
      ]
    };

    // this.params = useParams()
  }

  getCategoryForAddItem = async () => {
    const { menuId } = this.props.match.params
    try {
      const { data, status } = await getApi(`${base_url}/internals/get_all_categories/${menuId}`, "")
      if (data.code == 200) {
        this.setState({ allCategories: data.payload })
      } else {
        console.log("error", data.message);
      }
    } catch ({ message }) {
      console.log("getItems error", message)

    }
  }

  getCustomizationTypeForAddItem = async () => {
    try {
      const { data, status } = await getApi(`${base_url}/internals/get_all_option_types`, "")
      if (data.code == 200) {
        this.setState({ allOptions: data.payload })
      } else {
        console.log("error", data.message);
      }
    } catch ({ message }) {
      console.log("getItems error", message)

    }
  }

  componentDidMount() {
    // console.log(this.props);
    this.getCategoryForAddItem();
    this.getCustomizationTypeForAddItem()
  }


  //Type Clone Functions
  handleChange2 = (checked2) => {
    this.setState({ checked2 });
  }

  onClickButtonAdder2 = (event) => {
    event.preventDefault();
    this.setState({
      fields2: ["", ...this.state.fields2]
    });
  }

  onClickFormGroupButton2 = (index) => {
    let fields2 = [...this.state.fields2];
    fields2.splice(index, 1);
    this.setState({ fields2 });
  }

  onChangeFormGroupInput2(index, event) {
    let fields2 = [...this.state.fields2];
    fields2[index] = event.target.value;
    this.setState({ fields2 });
  }


  //Value Clone Functions
  handleChange = (checked) => {
    this.setState({ checked });
  }

  onClickButtonAdder = (event) => {
    event.preventDefault();
    this.setState({
      fields: ["", ...this.state.fields]
    });
  }

  onClickFormGroupButton = (index) => {
    let fields = [...this.state.fields];
    fields.splice(index, 1);
    this.setState({ fields });
  }

  onChangeFormGroupInput(index, event) {
    let fields = [...this.state.fields];
    fields[index] = event.target.value;
    this.setState({ fields });
  }

  handledropdown = (val) => {
    if (val.target.options.selectedIndex == 1) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }

  handleInputChange = (value, key) => {
    // console.log(value, key);
    this.setState({ [key]: value });
  }

  handleRemoveCustomizationField = (i, cI) => {
    const { customizationList } = this.state
    let customizeValueArr = customizationList[i].customization_values
    customizeValueArr.splice(cI, 1)
    customizationList[i].customization_values = customizeValueArr
    this.setState({ customizationList });
  }

  handleAddCustomizationField = (i, cI) => {
    const { customizationList } = this.state
    let customizeValueArr = customizationList[i].customization_values
    customizeValueArr.push({ name: "", price: "" })
    customizationList[i].customization_values = customizeValueArr
    this.setState({ customizationList });
  }

  handleAddCustomizationValue = () => {
    const { customizationList } = this.state
    customizationList.push({
      name: "",
      is_required: true,
      option_type_id: 0,
      customization_values: [
        {
          name: "",
          price: ""
        },
        {
          name: "",
          price: ""
        },
        {
          name: "",
          price: ""
        },
      ]
    })
    this.setState({ customizationList });
  }

  handleRemoveCustomizationValue = (i) => {
    const { customizationList } = this.state
    customizationList.splice(i, 1)
    this.setState({ customizationList });
  }

  handleSubmit = () => {
    console.log(this.state)
  }

  render() {
    const { allCategories, allOptions, customizationList } = this.state
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
                            placeholder="Enter a name"
                            onChange={(e) => this.handleInputChange(e.target.value, "itemName")}
                          />

                        </div>
                        <div className="col-md-12 mb-2">
                          <label>Select Category</label>
                          <select onChange={(e) => this.handleInputChange(e.target.value, "selectedCategory")} className="form-control">
                            <option value={null}>Select Category</option>
                            {allCategories.map((value, index) => <option value={value.id}>{value.category_name}</option>)}
                          </select>
                        </div>
                        <div className="col-md-12 mb-2">
                          <label>Item Customization</label>
                          <select
                            type="text"
                            className="form-control"

                            onChange={(event) => { this.handledropdown(event) }}
                          >
                            <option>Optional</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                          </select>
                        </div>

                        {/* <div style={{ display: this.state.show ? "block" : "none" }} className="col-md-12 mb-2">
                          <label>Customization Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder=""
                          />
                        </div> */}
                        {customizationList.map((value, index) => {
                          return (
                            <div style={{ display: this.state.show ? "block" : "none" }} className="col-md-12 mb-2">
                              <div className="col-md-12 mb-2">
                                <label>Customization Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-username1"
                                  name="val-username"
                                  placeholder="Enter customization name"
                                  onChange={(e) => {
                                    customizationList[index].name = e.target.value
                                    this.setState({ customizationList });
                                  }}
                                />
                              </div>
                              <div className="col-md-12 mb-2">
                                <label>Customization Type</label>
                                <select
                                  className="form-control"
                                  id="val-username1"
                                  name="val-username"
                                // onChange={this.onChangeFormGroupInput2.bind(this, i)}
                                >
                                  <option value={""}>select options</option>
                                  {allOptions.map((value, index) => <option value={value.id}>{value.description}</option>)}
                                </select>
                              </div>
                              {value.customization_values.map((cValues, cIndex) => {
                                return (
                                  <div className="col-md-12 mb-2">
                                    <label></label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="val-username1"
                                      name="val-username"
                                      placeholder="Customization Value"
                                    // onChange={this.onChangeFormGroupInput2.bind(this, i)}
                                    />
                                    <div className="short-inp">
                                      <input
                                        placeholder="$$"
                                        type="text"
                                        // onChange={this.onChangeFormGroupInput2.bind(this, i)}
                                        className="form-control" />
                                    </div>
                                    <a style={{ fontSize: "10px", cursor: "pointer" }} className="mr-2" onClick={() => this.handleRemoveCustomizationField(index, cIndex)}> - Remove</a>
                                  </div>
                                )
                              })}
                              <div className="row">
                                <a style={{ fontSize: "10px", cursor: "pointer" }} onClick={() => this.handleAddCustomizationField(index)} >+ Add Another Field</a>
                                {customizationList.length > 1 && <a style={{ fontSize: "10px", cursor: "pointer", marginLeft: 10 }} onClick={() => this.handleRemoveCustomizationValue(index)} >- Remove Value</a>}
                              </div>
                            </div>
                          )
                        })}
                        {this.state.show && <div className="col-md-12 mb-2">
                          <a style={{ fontSize: "10px", cursor: "pointer" }} onClick={() => { this.handleAddCustomizationValue() }} >+ Add Another Value</a>
                        </div>}
                        {/* {this.state.fields2.map((x, i) => {
                          return (
                            <div style={{ display: this.state.show ? "block" : "none" }} className="col-md-12 mb-2">
                              <div className="col-md-12 mb-2">
                                <label>Customization Type</label>
                                <select
                                  className="form-control"
                                  id="val-username1"
                                  name="val-username"
                                  onChange={this.onChangeFormGroupInput2.bind(this, i)}
                                >
                                  <option value={""}>select options</option>
                                  {allOptions.map((value, index) => <option value={value.id}>{value.description}</option>)}
                                </select>
                              </div>
                              <div className="col-md-12 mb-2">
                                <label></label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-username1"
                                  name="val-username"
                                  placeholder="Customization Value"
                                  onChange={this.onChangeFormGroupInput2.bind(this, i)}
                                />
                                <div className="short-inp">
                                  <input placeholder="$$" type="text" onChange={this.onChangeFormGroupInput2.bind(this, i)} className="form-control" />
                                </div>
                              </div>
                              <div className="col-md-12 mb-2">
                                <label></label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="val-username1"
                                  name="val-username"
                                  placeholder="Customization Value"
                                  onChange={this.onChangeFormGroupInput2.bind(this, i)}
                                />
                                <div className="short-inp">
                                  <input placeholder="$$" onChange={this.onChangeFormGroupInput2.bind(this, i)} type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-md-12 mb-2">

                                {this.state.fields.map((x, i) => {
                                  return (
                                    <div>
                                      <label></label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="val-username1"
                                        name="val-username"
                                        placeholder="Customization Value"
                                        onChange={this.onChangeFormGroupInput.bind(this, i)}
                                      />
                                      <div className="short-inp">
                                        <input placeholder="$$" onChange={this.onChangeFormGroupInput.bind(this, i)} type="text" className="form-control" />
                                      </div>
                                      <div className="btn-box">
                                        {this.state.fields.length !== 1 && <a style={{ fontSize: "10px", cursor: "pointer" }} className="mr-2" onClick={this.onClickFormGroupButton.bind(i)}> - Remove</a>}
                                        {this.state.fields.length - 1 === i && <a style={{ fontSize: "10px", cursor: "pointer" }} onClick={this.onClickButtonAdder} >+ Add Another Value</a>} <br></br>
                                        {this.state.fields2.length !== 1 && <a style={{ fontSize: "10px", cursor: "pointer" }} className="mr-2" onClick={this.onClickFormGroupButton2.bind(i)}> - Remove</a>}
                                        {this.state.fields2.length - 1 === i && <a style={{ fontSize: "10px", cursor: "pointer" }} onClick={this.onClickButtonAdder2} >+ Add Another Field</a>}

                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })
                        } */}


                        <div className="col-md-12 mb-2">
                          <label>Price</label>
                          <input
                            type="number"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Enter a price (USD)"
                            onChange={(e) => this.handleInputChange(e.target.value, "prize")}
                          />
                        </div>
                        <div className="col-md-12 mb-2">
                          <label>Preparation Time</label>
                          <input
                            type="number"
                            className="form-control"
                            id="val-username1"
                            name="val-username"
                            placeholder="Enter time (Minutes)"
                            onChange={(e) => this.handleInputChange(e.target.value, "preperationTime")}
                          />
                        </div>
                        {/* <div className="col-md-12 mb-2">
                          <label>
                            <span className=" mr-5">Available in Stock</span>
                            <Switch className="mt-2" onColor="#ffbe00" onChange={this.handleChange} checked={this.state.checked} />
                          </label>
                        </div> */}
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
                            {({ getRootProps, getInputProps }) => (
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
                          <textarea onChange={(e) => this.handleInputChange(e.target.value, "description")} rows="10" className="form-control"></textarea>
                        </div>
                        <div className="col-md-12 mb-2 text-right">
                          <button onClick={this.handleSubmit} className="btn btn-primary">Save</button>
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

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  menu: state.menuReducer.menu
})

const mapDispatchToProps = {
  // getAllMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddMenu))