import React from 'react'

function DisplayingTest({itemsCount}) {
  return (
    <div>
      <ul>
          {Object.entries(itemsCount).map(([prodID /*key*/, quantity/*value*/])=>( //Object.entries():method used to iterate over objects
            <div>
              itemID : {prodID} Quantity : {quantity}
            </div>
          ))}
        </ul>
    </div>
  )
}

export default DisplayingTest
