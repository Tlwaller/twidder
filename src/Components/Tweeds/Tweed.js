import React, { useState } from 'react'
import { propic, tweedDropdown, comment, retweed, like, share, analytics } from '../../Images';

export default function Tweed(props) {
    const [likes, setlikes] = useState(props.likes.length);

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
                            <button className='tweed-btn' onClick={e => setlikes(likes + 1)}><img src={like} className='tweed-btn-img'/></button>
                            {`${likes}`}
                        </label>
                        <button className='tweed-btn'><img src={share} className='tweed-btn-img'/></button>
                    </footer>
                </main>
        </section>
    )
}
