import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSession } from '../Redux/Reducers/UserReducer';

class UserLanding extends Component {
    render() {
        if(!this.props.userid) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                helo
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userid: reduxState.userReducer.userid
    }
}

export default connect(mapStateToProps, { getSession })(UserLanding)