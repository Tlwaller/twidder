import React, { Component } from "react";
import birb from '../images/white-birb.png';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
    <div id='login-bg'>
      <div id='login-container'>
        <img src={birb} alt='birb' style={{height: 30 + 'px'}, {width: 30 + 'px'}}/>
        <h2>Log in to Twidder!</h2>

        <form id='login-form'>
          <label className='login-label'>Username
            <input className='login-input' type='text' name='username'/>
          </label>
          <label className='login-label'>Password
            <input className='login-input' type='password' name='password'/>
          </label>
          <button id='login-btn' >Log in</button>
        </form>

        <Link id='register-link' to='/register'>Sign up for Twidder</Link>
      </div>
    </div>
    )
  }
}

export default Login;
