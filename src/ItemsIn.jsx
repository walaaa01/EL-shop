import React, { createContext, useState } from 'react'
import ItemsDisplay from './ItemsDisplay';


export const ItemsCart = createContext();
function ItemsIn(props) {
    const [litems, setLitems] = useState({
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
      });
    
      const addToCart = (itemID) =>{
        setLitems((prev) =>({
          ...prev,
          [itemID] : prev[itemID] +1, // [itemID](4) : prev[itemID](0) + 1 
        }))
        console.log(itemID)
      }
    
      const removeFromCart =(itemID) =>{
        setLitems((prev) =>({
          ...prev,
          [itemID] : prev[itemID] >0 ? prev[itemID] - 1 : 0,
        }))
        console.log(itemID)

      }
      
      
  return (
    <>
      <div>
        <ItemsCart.Provider value={{litems, addToCart, removeFromCart}} addToCart={addToCart} removeFromCart={removeFromCart}>
          {props.children}  
        </ItemsCart.Provider>
      </div>
      
    </>
  )
}

export default ItemsIn
