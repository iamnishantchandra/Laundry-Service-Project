import React from 'react';
import './signIn.css';
import AppHeader from './appheader';
import Appfooter from './appfooter';
import {Link ,useNavigate} from 'react-router-dom';
import {useState} from 'react';

function SignIn(){
    const navigate = useNavigate();
    const [user,setUser]=useState({
        Email:"",Password:""
    });
    let name , value;
    const updateUser =(e)=>{
        name = e.target.name
        value = e.target.value

        setUser({...user,[name]:value})

    }
    const validate= async(e)=>{
        e.preventDefault();
        try{
            const {Email,Password} = user;
            const res = await fetch("http://localhost:5000",{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                    Email,Password
                })
            });
            const data = await res.json();
            console.log(data);

            if (data.status === 400 || !data){
                window.alert("invalid credentials");
                console.log("invalid credentials");
            }else{
                window.alert("user logged In");
                console.log("user logged In");

                navigate("/signup");
            }
        }catch(err){
            console.log(err);

        }
        // window.location.href = "/signup";
        

        // if (data.status === 400 || !data){
        //     window.alert("invalid credentials");
        //     console.log("invalid credentials");
        // }else{
        //     window.alert("user logged In");
        //     console.log("user Logged In ");
        // }
        
    }
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
                <Link className='btn' to='/signup'>Register</Link>
            </div>

            </div>
            <div className='rightcontainer'>
            <div className='rightcontent'>
                <p className='rightP'>SIGN IN</p>
                <form method='POST' >
                    <input name='Email' type='text' placeholder='Mobile/Email' value={user.Email} onChange={updateUser}/>
                    <hr/>
                    <br/>
                    <input name='Password' type='password' placeholder='Password' value={user.Password} onChange={updateUser}/>
                    <hr/>
                    <p className='right2p'>Forget Password ?</p>
                    <button className='right-btn' type='submit' onClick={validate} >Sign In </button> 

                </form>
            </div>
            </div>
        </div>
    </div>
    <Appfooter/>
    </>

)}

export default SignIn;