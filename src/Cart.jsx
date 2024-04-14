import React, { useContext,useState,useEffect } from 'react'
import { DisplayProds } from './CartContext';
import './App.css'
import { useNavigate } from 'react-router-dom';
import { BuyNow } from './AuthContext';
function Cart() {
  const {cart, addingToCart, removingFromCart, ProductQuantity, TotalPrice, ReduceQuantity, first, HandleReducing, HandleRemoving} = useContext(DisplayProds)
  const {isSignedIn} = useContext(BuyNow);
  //console.log(cart.length)
  const [isLoading, setIsLoading] = useState(false)

  const nav = useNavigate();
  const HandleNav = () =>{
    if(isSignedIn===true){
      nav("/Buy");
    }
    else{
      alert("u'll need to sign in!");
      nav("/Account");
    }
  }
  console.log("signed in state IN CART : ",isSignedIn);
  console.log("first",first)
  console.log("cart", cart)
  return (
    <div>
      <h1 className='shopTitle mt-10 font-serif'>CART</h1>
      {first.length===0 ?   <>
                              <div className="flex justify-center items-center">
                                <div className="loading loading-infinity loading-lg h-20 w-20 border-b-1 border-gray-900"></div>
                              </div>
                              <div className="flex justify-center items-center">
                                <h2 className='shopTitle text-sm mb-16 font-serif'>Your cart is empty, go add some stuff!</h2>
                              </div>
                            </>
                             : 
        (first.map(item => (
          
          <div key={item.productID} >
            <ul>
                  <div className="hero-content flex-col lg:flex-row">
              
                    <img src={item.productImage} width={90} height={120} alt="x" className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'/>
                    <div className=''>
                      <h5 className='mb-2 text-indigo-500 text-2xl font-bold tracking-tight text-balance'>Product Name :</h5><p className='mb-2 text-1xl font-bold tracking-tight text-balance'>{item.productTitle}</p>
                      <h5 className='mb-2 text-indigo-500 text-2xl font-bold tracking-tight text-balance'>Price :  </h5><p className='mb-2 text-1xl font-bold tracking-tight text-balance'>${item.productPrice}</p>
                    </div>
                    
                      
                    <strong><h5 className='mb-2 text-indigo-500 text-2xl font-bold tracking-tight text-balance' >Quantity :</h5> <input type='number' className='input input-bordered input-primary w-40 max-w-xs' value={item.quantity} onChange={()=>{ProductQuantity(item.productID)}}/></strong>
                    <strong><h5 className='mb-2 text-indigo-500 text-2xl font-bold tracking-tight text-balance' >Total Price :</h5> <input type='number' className='input input-bordered input-primary w-40 max-w-xs' value={Math.round(item.quantity * item.productPrice)} onChange={()=>{TotalPrice(item.productID)}} /></strong>
                    <button className="btn btn-outline btn-primary mt-10" onClick={() => {ReduceQuantity(item); HandleReducing(item);}}>Reduce Quantity</button>
                    <button className="btn btn-outline btn-primary mt-10" onClick={()=> {removingFromCart(item); HandleRemoving(item); }}>Remove From Cart</button><br/>
                      
                    <button className="btn btn-outline btn-primary mt-9" onClick={HandleNav}>Buy Now!</button>
                  
                  </div>
            </ul>
          </div>
        )))}
    </div>
  )
}

export default Cart

