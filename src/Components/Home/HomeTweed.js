import React , { useState }from 'react'
import { Link } from 'react-router-dom';
import { propic, image, gif, poll, emoji, schedule } from '../../Images';

export default function HomeTweed() {

    return (
        <div className='ht-container'>
            <Link to='/myprofile' >
                <img src={propic} className='ht-propic' alt='profile' style={{height: 2.5 + "em"}}/>
            </Link>
            <div className='ht-inner-section'>
                <input className='ht-input' placeholder="What's poppin'?"/>
                <div className='ht-btns-container'>
                    <button>img</button>
                    <button>gif</button>
                    <button>poll</button>
                    <button>emoji</button>
                    <button>schedule</button>
                    <button className='ht-tweed-btn'>Tweed</button>
                </div>
            </div>
            
        </div>
    )
}
