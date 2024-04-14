import './App.css';
import 'flowbite';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Shop from "./Shop"
import Cart from "./Cart"
import ItemsIn from './ItemsIn.jsx';
import ItemsDisplay from './ItemsDisplay.jsx';
import Root from './Root.jsx';
import Account, { BuyNow } from './Account.jsx';
import Iphone from './Iphone.jsx';
import Laptops from './Laptops.jsx';
import Womens_clothing from './Womens_clothin.jsx';
import Electronics from './Electronics.jsx';
import Jewelery from './Jewelery.jsx';
import Mens_clothing from './Mens_clothing.jsx';
import CartContext from './CartContext.jsx';
import React from 'react';
import Welcoming from './Welcoming.jsx';
import Layout from './Layout.jsx';
import PFooter from './PFooter.jsx';
import SignUp from './SignUp.jsx';
import Buy from './Buy.jsx';
import AuthContext from './AuthContext.jsx';

function App() {
  
  return (
    <div>
      <Router>  
        <Layout/>
        <Routes>
          <Route path='/' element={<Welcoming/>}/>
          <Route path='/SignUp' element={
            <SignUp/>
          }/>
          <Route path='/Buy' element={<Buy/>}/>
          <Route path="/Shop" element={
          <ItemsIn>
            <Shop/>
            <PFooter/>
          </ItemsIn>}/>
          <Route path="/Cart" element={
            <CartContext>
              <AuthContext>
                <Cart/>
                <PFooter/>
              </AuthContext>
            </CartContext>} />
          <Route path="/Account" element={
          <AuthContext>
            <Account/>
            <PFooter/>
          </AuthContext>}/>
          <Route path="/ItemsIn" element={
            <ItemsIn>
              <ItemsDisplay/>
              <PFooter/>
            </ItemsIn>}
          />

        <Route path="/:categoryName" element={
          <CartContext>
            <Electronics/>
            <PFooter/>
          </CartContext> 
        } />
        </Routes>
      </Router>
    </div>
  );
}


export default App;


