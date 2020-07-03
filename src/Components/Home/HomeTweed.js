import React , { useState }from 'react'
import { Link } from 'react-router-dom';
import propic from '../../images/icons/profile pic.png'

export default function HomeTweed() {

    return (
        <div className='ht-container'>
            <Link to='/myprofile' >
                <img src={propic} alt='profile' style={{height: 2.5 + "em"}}/>
            </Link>
            <input placeholder="What's poppin'?"/>
            <div className='ht-btns-container'>
                <button>img</button>
                <button>gif</button>
                <button>poll</button>
                <button>emoji</button>
                <button>schedule</button>
            </div>
            <button className='ht-tweed-btn'>Tweed</button>
        </div>
    )
}
