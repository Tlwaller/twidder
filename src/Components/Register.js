import React, { Component } from "react";
import birb from "../images/white-birb.png";

class Register extends Component {
  render() {
    return (
      <div id="reg-container">
        <div id="reg-box">
          <header>
            <img src={birb} alt="birb" />
            <button className="reg-next-btn">Next</button>
          </header>
        </div>
      </div>
    );
  }
}

export default Register;
