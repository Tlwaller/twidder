import React from 'react'
import HomeTweed from './HomeTweed';
import Feed from '../Tweeds/Feed';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSession } from '../../Redux/Reducers/UserReducer';

function UserLanding(props){
        if(!props.userid) {
            return <Redirect to='/'/>
        }

    return (
        <div id='ul-container'>
            <div className='ul-title-container'>
                <header className='ul-title'>
                    <h3>Home</h3>
                </header>  
            </div>
            <HomeTweed/>
            <Feed/>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        userid: reduxState.userReducer.userid
    }
}

export default connect(mapStateToProps, { getSession })(UserLanding)