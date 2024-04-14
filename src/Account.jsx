import React, { createContext, useContext, useState } from 'react'
import { BuyNow } from './AuthContext'
import {auth} from "./FireBase_config.jsx"
import {sendPasswordResetEmail} from 'firebase/auth';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';


function Account() {
  const {isSignedIn, setIsSignedIn, HandleSignIn} = useContext(BuyNow);
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [resetMail, setResetMail] = useState("")
  const nav = useNavigate();
  const HandleResetPassword = async(email) =>{
    try{
      await sendPasswordResetEmail(auth, email)
      alert("link sent!")
      setIsOpen(false)
    }catch(error){
      console.log("error --> : ", error)
      alert("FAIL!!!!")
    }
  }

  const HandlePopUp =() =>{
    setIsOpen(false)
    nav("/Account")
  }

  const openPopUp = () =>{
    setIsOpen(true)
  }
  
  const HandleNav = () =>{
      nav("/SignUp");
  }
  /*---------------------------- FORGET PASSWORD LEZEMHA POPUP ---------------------------------------- */
  
  console.log(isOpen)
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={(e)=>{e.preventDefault(); HandleSignIn(emailInput, passwordInput);}} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" value={emailInput} required onChange={(e)=>{setEmailInput(e.target.value);}} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text" >Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" value={passwordInput} onChange={(e)=>{setPasswordInput(e.target.value);}} required />
              <label className="label">
                <a href='Cart'  className="label-text-alt link link-hover" onClick={(e)=>{e.preventDefault(); openPopUp()}}>Forgot password?</a>
                <Popup className='hero min-h-screen bg-base-200' open={isOpen} closeOnDocumentClick onClose={HandlePopUp}>
                  <div className="p-14 max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg">
                    <div className="mb-6">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        <span className="font-serif text-base">Enter your Email :</span>
                      </label>
                      <input type='email' className="block w-full p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={resetMail} onChange={(e)=>{setResetMail(e.target.value)}}/>
                    </div>
                    <div className="flex justify-end">
                      <button className='btn btn-primary' onClick={()=>{HandleResetPassword(resetMail)}}>Send Link</button>
                    </div>
                      <button onClick={HandlePopUp} className="btn btn-circle btn-outline absolute top-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                  </div>
                </Popup>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <label className="label">
                <div className="label-text-alt text-sm mr-4">Don't have an account yet? </div><a className="label-text-alt link link-hover text-sm" onClick={HandleNav}>Register Now!</a>
              </label>
            </div>
                     
          </form>

        </div>
      </div>
      
    </div>

  )
}

export default Account
