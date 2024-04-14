import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
//import "./Navbar.css"
import LOGO from "./images/LOGO.png";
import { BuyNow } from './AuthContext';
import { signOut } from 'firebase/auth';
import {auth} from "./FireBase_config.jsx"


function Navbar() {
  //const [selectedOP, setSelectedOP] = useState("/")
  const nav = useNavigate();
  const nav2 = useNavigate();
  const {isSignedIn, setIsSignedIn} = useContext(BuyNow)
  /*const HandleNav =(state) =>{
    const path = state.target.value;
    if (path) { //if path=="" ya3ni ken l path houa l placeholder par defaut [(ici esmou espace client (check below)] tsir navigation, kenchi la)
      nav(path);
    }
    setSelectedOP("/"); //ig ki biha ki blech ama l goal enou ba3d ma tsir navigation trajja3ha ll racine
  }*/
  const HandleNavigate =()=>{
    nav2("/Shop")
  }
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  

  const HandleSignIn_Out = async()=>{
    if(isSignedIn===false){
      nav("/Account")
    }
    else{
      await signOut(auth);
      setIsSignedIn(false);
      alert("signed out successfully");
      nav("/Shop");
    }
  }
  return (
    <div className="navbar bg-base-200 text-base-content">
      <div className="flex-1 flex items-center">
          <img className="text-2xl" width={160} height={120} src={LOGO} alt="e-shop" onClick={()=>HandleNavigate()}/>
      </div>
      <div className='flex-none mb-10'>
        <ul className="menu menu-horizontal px-1">
          <li className='rounded-box w-92'>
            <button className='btn btn-primary' onClick={()=>{HandleSignIn_Out()}}>{isSignedIn===false ? "Sign In" : "Sign Out"}</button>
          </li>
          <li className='rounded-box w-92'>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <details>
              <summary>
                Espace client
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><Link to="/Cart">Cart</Link></li>
                <li><Link to="/Account">Account</Link></li>
              </ul>
            </details>
          </li>
        </ul>
        <label className="swap swap-rotate mb-2">
          <input type="checkbox" className="sr-only peer" value="dark" onChange={toggleTheme}  checked={theme === 'dark'}/>

          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          
          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
    
        </label>
      </div>
    </div>
    
    
  )
}

export default Navbar



 /*<img id="limage" width={240} height={200} src={LOGO} alt="e-shop" onClick={()=>HandleNavigate()}/>
      <div className='links'>
        <p>Espace Client : </p>
        <select className='links' defaultValue="" onChange={HandleNav}>
          <option value="" disabled>Espace Client</option>
          <option value="/">Shop</option>
          <option value="/Cart">Cart</option>
          <option value="/Account">Account</option>
        </select>
      </div>*/