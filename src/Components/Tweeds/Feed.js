import React, { useEffect } from 'react'
import { updateFeed } from '../../Redux/Reducers/PostReducer';
import { connect } from 'react-redux';
import Tweed from './Tweed';

function Feed(props) {
    useEffect(() => {
        props.updateFeed();
    }, []);
    console.log(props.feed);
    const feedMapped = props.feed.map((post, i) => {
        return (
            <Tweed key={i} postid={post.postid} authorid={post.authorid} authorname={post.authorname}
            postcontent={post.postcontent} tags={post.tags} likes={post.likes}/>
        )
    })

    return (
        <div>
            {feedMapped}
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        feed: reduxState.postReducer.feed
    }
}

export default connect(mapStateToProps, {updateFeed})(Feed);