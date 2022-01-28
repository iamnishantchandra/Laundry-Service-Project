import React from 'react';

import './appfooter.css';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';

function appfooter(){
return(
 <>
 <div className='footcontainer'>
    <div className='refercontent'>
      <hr className='line'/>
      <p className='refer'>Now Refer & Earn ₹500 for every referral*</p>
      <p className='terms'>* Terms and conditions will be applied</p>
    </div>
    <div className='midfoot'>
      <div className='leftmid'>
        <h3 className='bigwords'>ABOUT US</h3>
        <p>Doorstep Wash & Dryclean Service</p>
      </div>
      <div className='centermid'>
        <div className='c1'>
            <h3>Home</h3>
            <p>Sign In</p>
            <p>Register</p>
        </div>
        <h3 className='c2'>Pricing</h3>
        <div className='c1 c4'>
            <h3>Career</h3>
            <p>Blogs In</p>
            <p>Create</p>
        </div>
        <h3 className='c2'>Contact</h3>
        <div className='c1 c4'>
          <div className='social'>
            <h3 className='bigwords'>SOCIAL MEDIA</h3>
            <div className='images'>
              <img src={facebook} alt='facebook'></img>
              <img src={instagram} alt='instagram'></img>
              <img src={linkedin}alt='linkedin'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bottomfoot'>
      <p>2021 &#169; Laundry</p>
    </div>
 </div>
 </>
)}

export default appfooter;