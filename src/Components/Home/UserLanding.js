import React from 'react'
import HomeTweed from './HomeTweed';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSession } from '../../Redux/Reducers/UserReducer';

function UserLanding(){
        // if(!props.userid) {
        //     return <Redirect to='/'/>
        // }

    return (
        <div id='ul-container'>
            <div className='ul-title-container'>
                <header className='ul-title'>
                    <h3>Home</h3>
                    <h3>stars</h3>
                </header>  
            </div>
            
            <HomeTweed/>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        userid: reduxState.userReducer.userid
    }
}

export default connect(mapStateToProps, { getSession })(UserLanding)