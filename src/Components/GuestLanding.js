import React, { Component } from "react";
import eyeglass from "../images/eyeglass.png";
import ppl from "../images/ppl.png";
import bubble from "../images/bubble.png";
import birb from "../images/birb.png";
import { Link } from "react-router-dom";

class GuestLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div id="gl-container">
        <div id="gl-left">
          <ul id="gl-bullets">
            <li>
              <img className="gl-icon" src={eyeglass} alt='eyeglass'/>
              Follow your interests.
            </li>
            <li>
              <img className="gl-icon" src={ppl} alt='people'/>
              See what people are arguing about.
            </li>
            <li>
              <img className="gl-icon" src={bubble} alt='speech bubble'/>
              Post things that will ruin your future.
            </li>
          </ul>
        </div>

        <div id="gl-right">
          <form id="gl-login">
            <input
              type="text"
              className="gl-login-input"
              name="username"
              placeholder="username"
              onChange={this.handleChange}
            />
            <input
              type="password"
              className="gl-login-input"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
            />
            <input type="submit" value="Log In" id="gl-login-btn" />
          </form>

          <div id="gl-authbox">
            <img src={birb} alt="birb" id="gl-birb" />
            <h1 className="gl-block-text">
              See what's happening in the world right now
            </h1>
            <h3 className="gl-block-text">Join Twidder today.</h3>
            <Link to="/register" id="gl-authbox-signup-btn">
              Sign up
            </Link>
            <Link to="/login" id="gl-authbox-login-btn">
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestLanding;
