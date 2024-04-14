import React, { createContext, useEffect, useState } from 'react'
import {auth} from "./FireBase_config.jsx"
import {signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export const BuyNow = createContext();
function AuthContext(props) {
  const nav = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(()=>{
    const savedIsSignedIn = localStorage.getItem("isSignedIn");
    return savedIsSignedIn === "true";
  })

  useEffect(()=>{
    localStorage.setItem('isSignedIn', isSignedIn)
  },[isSignedIn])

 
   
  const HandleSignIn = async(email, password) =>{
    try{
      const userCreds = await signInWithEmailAndPassword(auth, email, password);
      setIsSignedIn(true);
      alert("logged in successfully!");
    }catch(error){
      console.log(error.code);
      alert("invalid creds");
    }
  }
  useEffect(() => {
    if (isSignedIn) {
        nav("/Shop");
    }
}, [isSignedIn, nav]);
  console.log("signed in state IN AUTH-CONTEXT COMPONENT : ",isSignedIn);
  return (
    <div>
      <BuyNow.Provider value={{isSignedIn, setIsSignedIn, HandleSignIn}}>
        {props.children}
      </BuyNow.Provider>
    </div>
  )
}

export default AuthContext
