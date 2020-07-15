import React , { useState }from 'react'
import { Link } from 'react-router-dom';
import { propic, image, gif, poll, emoji, schedule, addTweed } from '../../Images';

export default function HomeTweed() {
    const [tweedStatus, setTweedStatus] = useState('unready');
    const [tweed, setTweed] = useState('');
    
    const checkTweed = e => {
        setTweed(e.target.value);
        if(e.target.value.match(/[^ ]/)) {
            setTweedStatus('ready');
        } else setTweedStatus('unready');
        
    }
    return (
        <div className='ht-container'>
            <Link to='/myprofile'>
                <img src={propic} className='ht-propic' alt='profile' style={{height: 2.5 + "em"}}/>
            </Link>
            <div className='ht-inner-section'>
                <input className='ht-input' onChange={checkTweed} placeholder="What's poppin'?"/>
                <div className='ht-btns-container'>
                    <div className='ht-left-btns'>
                        <button className='ht-btn'><img src={image} alt='add img' className='ht-btn-img'/></button>
                        <button className='ht-btn'><img src={gif} alt='add gif' className='ht-btn-img'/></button>
                        <button className='ht-btn'><img src={poll} alt='add poll' className='ht-btn-img'/></button>
                        <button className='ht-btn'><img src={emoji} alt='add emoji' className='ht-btn-img'/></button>
                        <button className='ht-btn'><img src={schedule} alt='schedule tweed' className='ht-btn-img'/></button>
                    </div>
                    <div className='ht-right-btns'>
                        {/*implement these later*/}
                        {/* <button className='ht-btn ht-add-tweed'><img src={addTweed} alt='add tweed' className='ht-btn-img'></img></button> */}
                        {/* <div className='vl'/> */}
                        <button className={`ht-tweed-btn-${tweedStatus}`}>Tweed</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
