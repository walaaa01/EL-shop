import React, { useContext, useState } from 'react'
import {auth} from "./FireBase_config.jsx"
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { BuyNow } from './Account.jsx';

function SignUp() {
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    //const {isSignedIn, setIsSignedIn} = useContext(BuyNow);    
    const HandleSignUp = async(email, password)=>{
        const userCreds = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCreds.user
        const userUID = user.uid
        const userEmail = user.email
        const userName = user.displayName
        const userPP = user.photoURL
      }
    console.log(emailInput);

    const nav = useNavigate();
    const HandleNav = () =>{
        nav("/Account");
    }
    const HandleNav2 = ()=>{
        nav("/Shop");
    }
  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Sign Up now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={(e)=>{e.preventDefault(); HandleSignUp(emailInput,passwordInput); /*setIsSignedIn(true)*/}} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" required />
                </div>  
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" value={emailInput} required onChange={(e)=>{setEmailInput(e.target.value);}}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" value={passwordInput} required onChange={(e)=>{setPasswordInput(e.target.value);}} />
                    
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-2"> Sign Up</button>
                    <button className="btn btn-primary" onClick={HandleNav2}>Enter as a guest</button>
                    <label className="label">
                        <div className="label-text-alt text-sm mr-4">Already have an account? </div><a className="label-text-alt link link-hover text-sm" onClick={HandleNav}>Sign In here</a>
                    </label>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
