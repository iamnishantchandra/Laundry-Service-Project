import React, {useState} from "react";
import './register.css'

import {Link,useNavigate} from 'react-router-dom';
import AppHeader from './appheader';
import Appfooter from './appfooter';

function Register(){
    const navigate = useNavigate();
    const [user,setUser]= useState({
        Name:"",Email:"",Number:"",Pincode:"",State:"",District:"",Address:"",Password:""
    })
    let name ,value;
    const userUpdate = (e)=>{
        name=e.target.name
        value=e.target.value
        setUser({...user,[name]:value})
    }

    
    const registerUser= async(e)=>{
        e.preventDefault();
        console.log(user);
        try{
            const {Name,Email,Number,Pincode,State,District,Address,Password} = user;
            const res = await fetch("http://localhost:5000/register",{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                    Name,Email,Number,Pincode,State,District,Address,Password
                })
            });

            const data = await res.json();
            console.log("test");
            console.log(data);

            if (data.status === 400 || !data){
                window.alert("invalid registration");
                console.log("invalid registration");
            }else{
                window.alert("user created");
                console.log("user success created");

                navigate("/login");
               
            }

        }catch(err){
            console.log(err);
        }

        // window.location.href = "/";
    }

    return(
        <>
        <AppHeader/>
        <div className='registerContainer'>
        <div className='leftcontainer-r'>
            <div className='leftcontent-r'>
                <h1>Laundry Service</h1>
                <h3 className="discription">Doorstep wash & Dryclean service </h3>
                <p>Already Have Account ?</p>
                <Link className='btn-left' to='/login'>SignIn</Link>
            </div>
        </div>
        <div className='rightContainer-r'>
            <p className="form-head">REGISTER</p>
            <form method='POST' onSubmit={registerUser}>
                <div className="form-r">
                <div className="inputs-left">
                <input className="inputs-r" type="text" placeholder="Name" name="Name" onChange={userUpdate} value={user.name} />
                <hr className="inputline"/>
                <input className="inputs-r" type="number" placeholder="Phone" name="Number" onChange={userUpdate} value={user.phone}/>
                <hr className="inputline"/>
                <input className="inputs-r" type="text" placeholder="District" name="District" onChange={userUpdate} value={user.district}/>
                <hr className="inputline"/>
                <input className="inputs-r" type='number' placeholder="Pincode" name="Pincode" onChange={userUpdate} value={user.pincode}/>
                <hr className="inputline"/>
                </div>
                <br/>
                <div className="inputs-right">
                <input className="inputs-r" type='email' placeholder="Email" name="Email" onChange={userUpdate} value={user.email}/>
                <hr className="inputline"/>
                <input className="inputs-r" type='text' placeholder="State" name="State" onChange={userUpdate} value={user.state}/>
                <hr className="inputline"/>
                <input className="inputs-r" type="text" placeholder="Address" name="Address" onChange={userUpdate} value={user.address}/>
                <hr className="inputline"/>
                <input className="inputs-r" type="password" placeholder="Password" name="Password" onChange={userUpdate} value={user.password}/>
                <hr className="inputline"/>
                </div>
                </div>
                <div className="formcenter">
                  <input className="tickbox" type="checkbox"/> <label className="words">I agree to Terms & Condition receiving marketing and promotional materials</label>
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