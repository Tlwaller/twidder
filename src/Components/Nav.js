import React from 'react'
import birb from '../images/white-birb.png';
import house from '../images/lil house.png'

export default function Nav() {
    return (
        <div id='navbar' >
            <img className='white-birb' src={birb} alt='birb'/>
            <ul id='nav-list'>
                <li className='nav-item'>
                    <img src={house} alt='lil house'/>
                    <h2>Home</h2>
                </li>
            </ul>
        </div>
    )
}
