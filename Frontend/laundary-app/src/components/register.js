import React from "react";
import './register.css'

import {Link} from 'react-router-dom';
import AppHeader from './appheader';
import Appfooter from './appfooter';

function Register(){
    return(
        <>
        <AppHeader/>
        <div className='registerContainer'>
        <div className='leftcontainer-r'>
            <div className='leftcontent-r'>
                <h1>Laundry Service</h1>
                <h3 className="discription">Doorstep wash & Dryclean service </h3>
                <p>Already Have Account ?</p>
                <Link className='btn-left' to='/'>SignIn</Link>
            </div>
        </div>
        <div className='rightContainer-r'>
            <p className="form-head">REGISTER</p>
            <form method='POST' action='/register'>
                <div className="form-r">
                <div className="inputs-left">
                <input className="inputs-r" type="text" placeholder="Name" name="name" />
                <hr className="inputline"/>
                <input className="inputs-r" type="number" placeholder="Phone" name="phone" value=""/>
                <hr className="inputline"/>
                <input className="inputs-r" type="text" placeholder="District" name="district" value=""/>
                <hr className="inputline"/>
                <input className="inputs-r" type='number' placeholder="Pincode" name="pincode" value=""/>
                <hr className="inputline"/>
                </div>
                <br/>
                <div className="inputs-right">
                <input className="inputs-r" type='email' placeholder="Email" name="email" value=""/>
                <hr className="inputline"/>
                <input className="inputs-r" type='text' placeholder="State" name="state" value=""/>
                <hr className="inputline"/>
                <input className="inputs-r" type="text" placeholder="Address" name="address" value=""/>
                <hr className="inputline"/>
                <input className="inputs-r" type="password" placeholder="Password" name="password" value=""/>
                <hr className="inputline"/>
                </div>
                </div>
                <div className="formcenter">
                  <input className="tickbox" type="checkbox"/> <a className="words" href="#">I agree to Terms & Condition receiving marketing and promotional materials</a>
                  <button className="btn-r" type="submit">Register</button>
                </div>
            </form>
        </div>
        </div>
        <Appfooter/>

        </>
    )
}

export default Register;