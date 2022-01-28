import React from 'react';
import './signIn.css';
import AppHeader from './appheader';
import Appfooter from './appfooter';
import {Link} from 'react-router-dom';

function SignIn(){
return(
    <>
    <AppHeader/>
    <div className='container'>
        
        <div className='centercontent'>
            <div className='leftcontainer'>
            <div className='leftcontent'>
                <h1>Laundry Service</h1>
                <h3>Doorstep wash & Dryclean service </h3>
                <p>Don't Have An Account ?</p>
                <Link className='btn' to='/register'>Register</Link>
            </div>

            </div>
            <div className='rightcontainer'>
            <div className='rightcontent'>
                <p className='rightP'>SIGN IN</p>
                <form method='POST' action='/'>
                    <input name='usename' type='text' placeholder='Mobile/Email'/>
                    <hr/>
                    <br/>
                    <input name='password' type='password' placeholder='Password'/>
                    <hr/>
                    <p className='right2p'>Forget Password ?</p>
                    <button className='right-btn' type='submit' >Sign In </button> 

                </form>
            </div>
            </div>
        </div>
    </div>
    <Appfooter/>
    </>

)}

export default SignIn;