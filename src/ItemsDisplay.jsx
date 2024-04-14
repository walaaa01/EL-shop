import React, { useContext, useEffect } from 'react'
import { ItemsCart } from './ItemsIn'


function ItemsDisplay() {
const { litems, addToCart, removeFromCart } = useContext(ItemsCart)

  return (
    <div>
      <div>
          <ul>
            {Object.entries(litems).map(([itemID, quantity]) => (
              <>
                <li key={itemID}>
                  Item ID: {itemID}, Quantity: {quantity}
                  <button onClick={() => addToCart(parseInt(itemID))}>
                    Add
                  </button>
                  <button onClick={() => removeFromCart(parseInt(itemID))}>
                    Remove
                  </button>
                </li>
                
              </>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default ItemsDisplay
