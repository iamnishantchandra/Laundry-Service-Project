import { useEffect, useState } from "react";
import { getToken } from "../utils/authOperations";
import "./index.css";
import {Link} from 'react-router-dom';
import React from 'react';
import icon from '../../assets/viewicon.png';
import warning from '../../assets/warning.jpg';
import search from '../../assets/search.png';
// import Moment from 'react-moment';
// import 'moment-timezone';
// import dateFormat from 'dateformat';
import Footer from "../footer2";
import Header from "../header2";
import Sidebar from "../Sidebar2";
import Sidebar1 from "../sidebar/index";


function Orders() {
    const [orders, setOrders] = useState([]);
    const [currindex, setcurrindex] = useState(0)
    const [cancelid, setcancelid] = useState('')

    
    const month={'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}
    async function getOrders(){
        try{
            const response= await fetch("http://localhost:3070/orders/pastorders",{
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization':`Bearer ${getToken()}`,
                    },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-ur
            });
            const {data}= await response.json();
            console.log(data.orders);
            setOrders(data.orders.reverse());
            const l=data.orders.length
            console.log(l)
            if(l===0){
                window.location.href='/preorders'
            }

            

        }catch(e){
            console.log(e)
        };

    }
    useEffect(()=>{ getOrders(); }, [orders.status]); //component did mount

    async function cancelOrder(id){
            try{
            const response= await fetch(`http://localhost:3070/orders/cancelorder/${id}`,{
                method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization':`Bearer ${getToken()}`,
                    },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-ur
            });
            window.location.href='/orders';
        }catch(e){
            console.log(e)
        };
        }
    function changestate(e){
        setcurrindex(parseInt((e.target.id).split('|')[1])-1)
        setcancelid((e.target.id).split('|')[0])

    }
    function altcolor(index){
        if(index%2===1){
            return 'alt'
        }
        else{
            return 
        }
    }
    return (
        <div className="container-fluid" Style="height:708px; width:1345px; ">
            <Header/>
            <div className="content">
                <Sidebar/>
                <div className="right-content" Style="width:90%">
            <div className='head'>
                <div className='numorders'>Orders  |  {orders.length}</div>
                <Link to={'/createorder'}><button className='createbtn' >create</button></Link>
                <div className='searchbardiv'><img src={search} alt='searchicon' width="20" height="20"></img></div>
            </div>
            <table className="table">
                <thead>
                    <tr className="headrow">
                        <th scope="col">Order Id</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Store Location</th>
                        <th scope="col">City</th>
                        <th scope="col">Store Phone</th>
                        <th scope="col">Total Items</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                {orders.map((order,index)=>
                <tr key={order._id} {...order} className={altcolor(index)} >
                <th scope="row">{"OR000"+(index+1).toString()}</th>
                <td>{ order.date.slice(8,10)+' '+month[order.date.slice(5,7)]+' '+order.date.slice(0,4)+", "+order.date.slice(11,16)}</td>
                <td>Jp nagar</td>
                <td>Banglore</td>
                <td>+91 9999999999</td>
                <td>{order.items.reduce((acc,curr)=> acc+parseInt(curr.quantity),0)}</td>
                <td className='pricecol'>{order.items.reduce((acc,curr)=> acc+parseInt(curr.price),0)} Rs</td>
                <td>{order.status==='cancelled' ? <i className='red'>cancelled</i> : order.status}</td>
                <td>{order.status==="ready to pickup" ? <h6 className="danger" data-bs-toggle="modal" data-bs-target="#exampleModal" id={order._id.toString()+'|'+(index+1).toString()} onClick={(e)=>{changestate(e)}}  data-id={cancelid}>cancel order</h6> : null}
                 <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Alert</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className='warning'><img src={warning} alt="caution" width="50" height="50"/></div>
                <div className="message">Are you sure want to cancel the order No : <b>{"OR000"+(currindex+1).toString()}</b></div>
            </div>
            <div className="modal-footer">
                <button type="button" className="proceedbtn" data-dismiss="modal" id={cancelid} onClick={(e)=>{cancelOrder(e.target.id)}}>proceed</button>
            </div>
            </div>
            </div>
            </div>
                </td>
                
                <td ><img src={icon} alt="icon" data-bs-toggle="modal" data-bs-target="#exampleModal2" id={(index+1).toString()} onClick={(e)=>{setcurrindex(parseInt(e.target.id)-1)}} ></img>
                <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog summary-dialog" role="document">
                        <div className="modal-content summary-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Summary</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="store">
                                            <div className='storeloc'><a>Store Location</a><br />Jp Nagar</div>
                                            <div className='storeadd'><a>Store Address</a><br />Near phone booth, 10th road</div>
                                            <div className='storephone'><a>Phone</a><br />91 9999999999</div>
                                        </div>
                                        {/* <div className='statusbar'>orders[currindex].status</div> */}
                                        <div className='details'>
                                            <small className='orderdetails'>Order details<i className='status'><b>Status</b>: {orders[currindex].status}</i></small>
                                            {orders[currindex].items.map((prod,index)=>
                                            <div className='solo-item' key={index}><div className='solo1'>{prod.name}</div>  <div className='solo2'>{prod.actions.map(action=><i>{action},</i>)}</div> <div className='solo3'>{prod.quantity} X {parseInt(prod.price/prod.quantity)} = <b>{prod.price}</b> </div> <hr></hr> </div>)}
                                            <div className='subtotal'>Sub total: <b className='numbers'>{orders[currindex].items.reduce((acc,curr)=> acc+parseInt(curr.price),0)}</b></div>
                                            <div className='charges' >Pickup charges: <b className='numbers'>90</b></div>
                                            <div className='total' ><b className='final'>Total:   Rs {orders[currindex].items.reduce((acc,curr)=> acc+parseInt(curr.price),0)+90
                                            }</b></div>
                                        </div>
                                        <div className='addressbar'><small className='orderdetails'>Address</small>
                                        <div className='address1'>
                                            <b className='numbers'>Home</b><br />
                                            #223, 10th road, Jp Nagar,
                                            Bangalore
                                        </div>
                                        </div>

                                    </div>
                                    <div className="modal-footer footer">
                                    {orders[currindex].status==="ready to pickup" ? (<button type="button" id={orders[currindex]._id.toString()} className="btn btn-danger" data-bs-dismiss="modal" onClick={(e)=>{cancelOrder(e.target.id)}}>Cancel</button>) : null}
                            </div> 
                        </div>
                    </div>
                </div>
                </td>


                </tr>   
                )}
                </tbody>
            </table>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Orders;
