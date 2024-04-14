import React, { useContext, useState } from 'react'
import p1 from './images/iphone8.jpg';
import p2 from './images/iphoneX.jpg';
import p3 from './images/iphoneXr.jpg';
import p4 from './images/iphoneXs.jpg';
import p5 from './images/iphone11.jpg';
import p6 from './images/iphone15.jpg';
import "./shop.css";
import { ItemsCart } from './ItemsIn';
import { Link } from 'react-router-dom';



function Iphone() {
    const phones = [
        {
            id : 0o1,
            PhoneName : "iphone8",
            PhoneImage : p1,
            PhonePrice : "$369"
        },
        {
            id : 0o2,
            PhoneName : "iphoneX",
            PhoneImage : p2,
            PhonePrice : "$470"
        },
        {
            id : 0o3,
            PhoneName : "iphoneXr",
            PhoneImage : p3,
            PhonePrice : "$499"
        },
        {
            id : 0o4,
            PhoneName : "iphoneXs",
            PhoneImage : p4,
            PhonePrice : "$529"
        },
        {
            id : 0o5,
            PhoneName : "iphone11",
            PhoneImage : p5,
            PhonePrice : "$599"
        },
        {
            id : 0o6,
            PhoneName : "iphone15",
            PhoneImage : p6,
            PhonePrice : "$899"
        }
    ]
    const {addToCart, removeFromCart} = useContext(ItemsCart)
    return (
    <div className='shop'>
        <Link to="/">Back To Main</Link>
        <h1 className='shopTitle'>Phones</h1>
        {phones.map((phone)=>{
            return(
                <div className='products'>
                    <div className='product'>
                        <img src={phone.PhoneImage} alt={phone.PhoneName}/>
                        <div className='description'>
                            {phone.PhoneName}<br/>
                            {phone.PhonePrice}<br/>
                            <button onClick={(e)=>{e.preventDefault(); addToCart(phone.id)}}>Add To Cart</button>
                            <button onClick={(e)=>{e.preventDefault(); removeFromCart(phone.id)}}>remove from cart</button>
                        </div>
                    </div>
                </div>

            )
        })}
    </div>
  )
}

export default Iphone
