import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import birb from '../images/white-birb.png';
import house from '../images/icons/lil house.png';
import bluHouse from '../images/icons/lil blu house.png';
import hashtag from '../images/icons/hashtag.png';
import bluHashtag from '../images/icons/blu hashtag.png';
import bell from '../images/icons/bell.png';
import bluBell from '../images/icons/blu bell.png';
import envelope from '../images/icons/envelope.png';
import bluEnvelope from '../images/icons/blu envelope.png';
import bookmark from '../images/icons/bookmark.png';
import bluBookmark from '../images/icons/blu bookmark.png'
import list from '../images/icons/list.png';
import bluList from '../images/icons/blu list.png'
import more from '../images/icons/more.png';

export default function Nav() {
    let location = useLocation();
    
    let home;
    if (location.pathname === "/home") {
       home = <img src={bluHouse} alt='home'/>
    } else {
        home = <img src={house} alt='home'/>
    };

    let explore;
    if (location.pathname === "/explore") {
        explore = <img src={bluHashtag} alt='explore'/>
    } else {
         explore = <img src={hashtag} alt='explore'/>
    };

    let notifications;
    if (location.pathname === "/notifications") {
        notifications = <img src={bluBell} alt='notifications'/>
    } else {
         notifications = <img src={bell} alt='notifications'/>
    };

    let messages;
    if (location.pathname === "/messages") {
        messages = <img src={bluEnvelope} alt='messages'/>
    } else {
         messages = <img src={envelope} alt='messages'/>
    };

    let bookmarks;
    if (location.pathname === "/bookmarks") {
        bookmarks = <img src={bluBookmark} alt='bookmarks'/>
    } else {
         bookmarks = <img src={bookmark} alt='bookmarks'/>
    };

    let lists;
    if (location.pathname === "/lists") {
        lists = <img src={bluList} alt='lists'/>
    } else {
         lists = <img src={list} alt='lists'/>
    };

    if((location.pathname !== '/') && (location.pathname !== '/login') && (location.pathname !== '/register')) {
    return (
        <div id='navbar' >
            <div id='nav-list'>
            <img className='white-birb' id='nav-bird' src={birb} alt='birb'/>
                <Link to='/home' className='nav-item'>
                    {home}
                    Home
                </Link>
                <Link to='/explore' className='nav-item'>
                    {explore}
                    Explore
                </Link>
                <Link to='/notifications' className='nav-item'>
                    {notifications}
                    Notifications
                </Link>
                <Link to='/messages' className='nav-item'>
                    {messages}
                    Messages
                </Link>
                <Link to='/bookmarks' className='nav-item'>
                    {bookmarks}
                    Bookmarks
                </Link>
                <Link to='/lists' className='nav-item'>
                    {lists}
                    Lists
                </Link>
                <Link to='/myprofile' className='nav-item'>
                    Profile
                </Link>
                <button className='nav-item'>
                    <img src={more} alt='more' />
                    More
                </button>
                <button id='nav-tweed-btn'>Tweed</button>
            </div>
        </div>
    )} else return null;
}
