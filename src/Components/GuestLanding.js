import React, { Component } from "react";
import eyeglass from "../images/eyeglass.png";
import ppl from "../images/ppl.png";
import bubble from "../images/bubble.png";

class GuestLanding extends Component {
  render() {
    return (
      <div id="gl-container">
        <div id="gl-left">
          <ul id="gl-bullets">
            <li>
              <img className="gl-icon" src={eyeglass} />
              Follow yo interests.
            </li>
            <li>
              <img className="gl-icon" src={ppl} />
              See what people are arguing about.
            </li>
            <li>
              <img className="gl-icon" src={bubble} />
              Argue with other people.
            </li>
          </ul>
        </div>

        <div id="gl-right"></div>
      </div>
    );
  }
}

export default GuestLanding;
