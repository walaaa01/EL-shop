import React from 'react'
import { useNavigate } from 'react-router-dom'

function Welcoming() {
  const nav = useNavigate()
  const HandleNav = ()=>{
    nav("/SignUp")
  }
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/34/09/24/360_F_234092401_jv2JZDvES6zocvLxNyVxoMDOGvRzg4rG.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5 font-bold italic">Welcome to our e-shop, where people spend less, and smile more</p>
                <button className="btn btn-primary" onClick={HandleNav}>Not registred yet? Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Welcoming
