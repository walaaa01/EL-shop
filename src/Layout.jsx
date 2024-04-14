import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import AuthContext from './AuthContext';

function Layout() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && 
      <AuthContext>
        <Navbar/>
      </AuthContext>
        } {/*if pathname != "/" then display navbar */}
    </div>
  )
}

export default Layout
