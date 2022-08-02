import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    console.log("Constructor Called");
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: "",
      phone: "",
      department: "",
      address: "",
      allData: [],
      type: 0,
      index: "",
    };
  }

  /*   componentMount() {
     Changing the state after 2 sec
    from the time when the component
    is rendered
    console.log("test");
  } */

  handledelete(i) {
    debugger;
    // console.log("Component will unmount called")
    // this.state.name = a.currentTarget.value;
    var data = this.state.allData;
    data.splice(i, 1);
    this.setState({
      allData: data,
    });
  }

  handleSubmit = (event) => {
     let click=window.confirm("Click ok to submit");
     if(click)
     {
      debugger;
      const { name, age, gender, phone, department, address, index, type } = this.state;
      //console.log(name, age, gender, phone);
      var data = this.state.allData;
      if (type === 0) {
        data.push({
          name: name,
          age: age,
          gender: gender,
          phone: phone,
          department: department,
          address: address,
        });
      } else {
        data[index].name = name;
        data[index].age = age;
        data[index].gender = gender;
        data[index].phone = phone;
        data[index].department = department;
        data[index].address = address;
      }
      debugger;
      this.setState({
        name: "",
        age: "",
        gender: "",
        phone: "",
        department: "",
        address: "",
        allData: data,
        type: 0,
      });
     }
     event.preventDefault();
  };

  handleChange = (event) => {
    debugger;
    // this.state.name = a.currentTarget.value;
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleEdit(i) {
    debugger;
    // this.state.name = a.currentTarget.value;
    let tempName = this.state.allData[i].name;
    let tempAge = this.state.allData[i].age;
    let tempGender = this.state.allData[i].gender;
    let tempPhone = this.state.allData[i].phone;
    let tempDepartment = this.state.allData[i].department;
    let tempAddress = this.state.allData[i].address;
    this.setState({
      index: i,
      type: 1,
      name: tempName,
      age: tempAge,
      gender: tempGender,
      phone: tempPhone,
      department: tempDepartment,
      address: tempAddress,
    });
  }

  renderTable() {
    return (
      <div className="parent p10">
        <table className="w100">
          <thead></thead>
          <tbody>
            <tr>
              <th className="p10">Name</th>
              <th className="p10">Age</th>
              <th className="p10">Gender</th>
              <th className="p10">Phone</th>
              <th className="p10">Department</th>
              <th className="p10">Address</th>
              <th className="p10">Actions</th>
            </tr>
            {this.state.allData.map((data, i) => (
              <tr key={i}>
                <td className="p10">{data.name}</td>
                <td className="p10">{data.age}</td>
                <td className="p10">{data.gender}</td>
                <td className="p10">{data.phone}</td>
                <td className="p10">{data.department}</td>
                <td className="p10">{data.address}</td>
                <td className="p10">
                  <button type="button" onClick={() => this.handleEdit(i)}>
                    Edit
                  </button>
                </td>
                <td className="p10">
                  <button type="button" onClick={() => this.handledelete(i)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    console.log("Component first render");
    debugger;
    return (
      <div className="wrapper">
        <h1>Crud Operation</h1>
        <form onSubmit={this.handleSubmit} className="form">
          {/* <fieldset className="field"> */}
          <div className="center">
            <div className="parent">
              <div className="hlabel">
                <label>
                  <b>Name</b>
                </label>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="enter name"
                  className="w100"
                  required
                />
              </div>
            </div>

            <div className="parent">
              <div className="hlabel">
                <label>
                  <b>Age</b>
                </label>
              </div>
              <div className="inputBox">
                <input
                min="0"
                  type="number"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  placeholder="enter age"
                  className="w100"
                  required
                />
              </div>
            </div>

            <div className="parent">
              <div className="hlabel">
                <label>
                  <b>Gender</b>
                </label>
              </div>
              <div className="radiobtn">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={this.handleChange}
                  required
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={this.handleChange}
                  required
                />
                Female
              </div>
            </div>

            <div className="parent">
              <div className="hlabel">
                <label>
                  <b>Phone</b>
                </label>
              </div>
              <div className="inputBox">
                <input
                min="0"
                  type="number"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="contact number"
                  className="w100"
                />
              </div>
            </div>

            <div className="parent">
              <div className="hlabel">
                <label>
                  <b>Department</b>
                </label>
              </div>
              <div className="inputBox">
                <select
                  name="department"
                  value={this.state.department}
                  onChange={this.handleChange}
                  className="w100"
                >
                  <option value="default">Select</option>
                  <option value="mca">BSC</option>
                  <option value="bca">BCA</option>
                  <option value="ba">BA</option>
                  <option value="msc">MSC</option>
                  <option value="mca">MCA</option>
                  <option value="ma">MA</option>
                </select>
              </div>
            </div>

            <div className="parent">
              <div className="hlabel">
                <label>
                  <b>Address</b>
                </label>
              </div>
              <div className="inputBox">
                <textarea
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  placeholder="enter address"
                  className="w100"
                  required
                />
              </div>
            </div>
            <div className="parent pl15">
              <input type="submit"></input>
            </div>
          </div>
          {/* </fieldset> */}
        </form>
        {this.renderTable()}
      </div>
    );
  }
}
export default UserForm;
