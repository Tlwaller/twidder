import React, { useState, useEffect } from 'react'
import { propic, tweedDropdown, comment, retweed, like, share, analytics } from '../../Images';
import { connect } from 'react-redux';
import { likePost } from '../../Redux/Reducers/PostReducer';

function Tweed(props) {
    const [likeState, setLikeState] = useState(props.likes);

    const handleLike = () => {
        setLikeState(props.reduxLikes);
    }
    useEffect(() => {
        props.likePost(props.postid);
        setLikeState(props.reduxLikes);
    }, [likeState])
    return (
        <section className='tweed-container'>
            <img src={propic} alt='profile pic' className='tweed-propic'/>
                <main>
                    <header>
                        <hgroup>
                            <h5 className='tweed-username'>{props.authorname}</h5>
                            <h5 className='tweed-userhandle'>@do-this-at-some-point</h5>
                            <h5 className='tweed-dot'>·</h5>
                            <h5 className='tweed-time'>30m</h5>
                        </hgroup>
                        <button className='tweed-dropdown-btn'><img src={tweedDropdown} alt='dropdown' className='tweed-dropdown-img'/></button>
                    </header>
                    <span>{`${props.postcontent}`}</span>
                    <footer>
                        <button className='tweed-btn'><img src={comment} className='tweed-btn-img'/></button>
                        <button className='tweed-btn'><img src={retweed} className='tweed-btn-img'/></button>
                        <label className='tweed-btn-count'>
                            <button className='tweed-btn' onClick={handleLike}><img src={like} className='tweed-btn-img'/></button>
                            {likeState.length}
                        </label>
                        <button className='tweed-btn'><img src={share} className='tweed-btn-img'/></button>
                    </footer>
                </main>
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        reduxLikes: reduxState.postReducer.likes
    }
}

export default connect(mapStateToProps, {likePost})(Tweed);