import React, { Component } from "react";
import birb from "../images/white-birb.png";

class Register extends Component {
  render() {
    return (
      <div id="reg-container">
        <div id="reg-box">
          <header>
            <div id="reg-head-spacer" />
            <img src={birb} alt="birb" />
            <button className="reg-btn">Register</button>
          </header>

          <form>
            <h1 id="reg-title">Put your stuff in</h1>
            <label className="reg-label">
              Username <input className="reg-input" />
            </label>

            <label className="reg-label">
              Password <input className="reg-input" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
