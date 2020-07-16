import React from 'react'
import { propic, tweedDropdown, comment, retweed, like, share, analytics } from '../Images';

export default function Tweed() {
    return (
        <section className='tweed-container'>
            <img src={propic} alt='profile pic' className='tweed-propic'/>
                <main>
                    <header>
                        <hgroup>
                            <h5 className='tweed-username'>Username</h5>
                            <h5 className='tweed-userhandle'>@user1</h5>
                            <h5 className='tweed-dot'>·</h5>
                            <h5 className='tweed-time'>30m</h5>
                        </hgroup>
                        <button className='tweed-dropdown-btn'><img src={tweedDropdown} alt='dropdown' className='tweed-dropdown-img'/></button>
                    </header>
                    <span>If you see this tweed then you still can't delete/edit/post tweeds. haklsdjhfl asdf djks fhlksad lkhds lkf sd plkjasasdfsadfsa f dsaf as ds ah kjdf lkjsad kj</span>
                    <footer>
                        <button className='tweed-btn'><img src={comment} className='tweed-btn-img'/></button>
                        <button className='tweed-btn'><img src={retweed} className='tweed-btn-img'/></button>
                        <button className='tweed-btn'><img src={like} className='tweed-btn-img'/></button>
                        <button className='tweed-btn'><img src={share} className='tweed-btn-img'/></button>
                        <button className='tweed-btn'><img src={analytics} className='tweed-btn-img'/></button>
                    </footer>
                </main>
        </section>
    )
}
