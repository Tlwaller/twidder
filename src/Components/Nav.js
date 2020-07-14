import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { whiteBirb, house, bluHouse, hashtag, bluHashtag, bell, bluBell, envelope,
    bluEnvelope, bookmark, bluBookmark, list, bluList, more, propic, quill } from '../Images.js';

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
            <img className='white-birb' id='nav-bird' src={whiteBirb} alt='white birb'/>
                <Link to='/home' className='nav-item' text='Home'>
                    {home}
                    <b>Home</b>
                </Link>
                <Link to='/explore' className='nav-item'>
                    {explore}
                    <b>Explore</b>
                </Link>
                <Link to='/notifications' className='nav-item'>
                    {notifications}
                    <b>Notifications</b>
                </Link>
                <Link to='/messages' className='nav-item'>
                    {messages}
                    <b>Messages</b>
                </Link>
                <Link to='/bookmarks' className='nav-item'>
                    {bookmarks}
                    <b>Bookmarks</b>
                </Link>
                <Link to='/lists' className='nav-item'>
                    {lists}
                    <b>Lists</b>
                </Link>
                <Link to='/myprofile' className='nav-item' id='nav-profile'>
                    <img src={propic} alt='your profile'/>
                    <b>Profile</b>
                </Link>
                <Link className='nav-item'>
                    <img src={more} alt='more' />
                    <b>More</b>
                </Link>
                <button id='nav-tweed-btn'>
                    <img src={quill} alt='new tweed'/>
                    <b>Tweed</b>
                </button>
            </div>
        </div>
    )} else return null;
}
