import React from 'react'
import { propic, tweedDropdown } from '../../Images';

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
            </main>
        </section>
    )
}
