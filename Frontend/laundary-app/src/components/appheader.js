import React from 'react';
import './appheader.css';
// import {Link} from 'react-router-dom';

function appheader(){
return(
    <>
        <div className='header'>
            <div className='logo'>
                <h3>LAUNDRY</h3>
            </div>
            <div className='top-nav'>
                <div className='headerlinks'>Home</div>
                <div className='headerlinks'>Pricing</div>
                <div className='headerlinks'>Career</div>
                <div className='headerlinks signbtn'>Sign In</div>
            </div>
        </div>
    </>

)}

export default appheader;