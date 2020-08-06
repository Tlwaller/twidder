import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from '../Redux/Reducers/UserReducer'
import { connect } from "react-redux";
import { eyeglass, ppl, bubble, birb } from '../Images';

class GuestLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      status: "incomplete",
      error: "login-ok"
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { loginUser } = this.props;
    loginUser({username, password}).catch(err => this.setState({error: 'login-error'}))
  }

  render() {
    if(this.props.userid) {
      return <Redirect to='/home'/>
    }
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
            <input type="submit" value="Log In" id="gl-login-btn" onClick={this.handleSubmit}/>
          </form>
          <h6 id={this.state.error} style={{height: "0px"}}>Username/password incorrect</h6>

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

const mapStateToProps = reduxState => {
  return {
    userid: reduxState.userReducer.userid
  }

}

export default connect(mapStateToProps, { loginUser })(GuestLanding);