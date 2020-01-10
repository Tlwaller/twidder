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

          <form className="reg-form">
            <h1 id="reg-title">Put your stuff in</h1>
            <label className="reg-label">
              Username <input className="reg-input" />
            </label>

            <label className="reg-label">
              Password <input className="reg-input" />
            </label>
          </form>

          <div id="reg-date-desc">
            <h3>Your birthday</h3>
            <p>So we know you're old enough for grown up stuff.</p>
          </div>
          <form className="reg-form" id="reg-date-form">
            <label className="reg-label" id="reg-month-drop">
              Month
              <select className="reg-dropdown">
                <option>January</option>
              </select>
            </label>
            <label className="reg-label" id="reg-day-drop">
              Day
              <select className="reg-dropdown"></select>
            </label>
            <label className="reg-label" id="reg-year-drop">
              Year
              <select className="reg-dropdown"></select>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
