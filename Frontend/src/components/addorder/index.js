import React from "react";
import Header from "../header2/index";
import Sidebar1 from "../sidebar/index";
import Footer from "../footer2/index";
import search from "../../assets/search.svg";
import "./index.css";
import {Link} from 'react-router-dom';

function Addorder(){
    return(
        <div className="container-fluid" Style="height:708px; width:1345px; ">
            <Header/>
                <div className="content">
            <Sidebar1/>
                <div className="right-content" Style="width:90%">
                <div Style="display:flex; justify-content: space-around; padding:15px; width:1110;"><h6 Style="margin-right:700px">Orders | 0</h6>
              <div Style="border-bottom:1px solid; width:150px; margin-right:120px">
              <img src={search}alt="search" ></img>
              </div>
              
        </div>
        <div className="add-order-content">
            <p Style="color:#5861AE">No orders available</p>
            <Link to='/createorder'><button type="button" className="button button4" >Create Order</button></Link>
        </div>
        
                </div>
                </div>
            <Footer/>
        </div>
    )
}
export default Addorder;