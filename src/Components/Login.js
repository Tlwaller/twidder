import React, { Component } from "react";
import birb from '../images/white-birb.png';
import { Link } from 'react-router-dom';
import { loginUser } from '../Redux/Reducers/UserReducer'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      status: 'incomplete'
    }
  }

  handleInput = e => {
    this.setState({[e.target.name] : e.target.value}, () => {
      if(this.state.username && this.state.password) {
        this.setState({status : 'complete'});
      } else this.setState({status : 'incomplete'});
    })

    
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { loginUser } = this.props;
    loginUser({username, password}); 
  }

  render() {
    if(this.props.userid) {
      return <Redirect to='/home'/>
    }
    return (
    <div id='login-bg'>
      <div id='login-container'>
        <img src={birb} alt='birb' style={{height: 30 + 'px'}, {width: 30 + 'px'}}/>
        <h2>Log in to Twidder!</h2>

        <form id='login-form'>
          <label className='login-label'>Username
            <input className='login-input' type='text' name='username' onChange={this.handleInput}/>
          </label>
          <label className='login-label'>Password
            <input className='login-input' type='password' name='password' onChange={this.handleInput}/>
          </label>
          <button id='login-btn'
          onClick={this.handleSubmit}
          className={this.state.status === 'complete' ? 'enabled' : 'disabled'}
          disabled={this.state.status === 'complete' ? false : true}>Log in</button>
        </form>

        <Link id='register-link' to='/register'>Sign up for Twidder</Link>
      </div>
    </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    userid: reduxState.userReducer.userid
  }

}

export default connect(mapStateToProps, { loginUser })(Login);