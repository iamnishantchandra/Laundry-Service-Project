import React from "react";
import "./index.css";
import { removeToken } from "../utils/authOperations";

function Header(){
    return(
        <div class="header2"  >
            <div className='appname'>
                <h4 Style="color:#5861AE; padding:20px;font-size:18px">LAUNDRY</h4>
            </div>
        <div className='subheader'>
          <div className="Pricing">Pricing </div>
          <div className="Career">Career </div>
          <div className="Username"><button className="btn dropdown-toggle buttonl" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <small className='logout'>User Name</small>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" ><small className='explore'>Explore</small></a></li>
    <li><a className="dropdown-item" > <small className='about'>About us</small></a></li>
    <li><a className="dropdown-item" onClick={()=>{removeToken()}} href="/"><small className='log'>Logout</small></a></li>
  </ul>
</div>
        </div>
          
        </div>
    )
}

export default Header;

