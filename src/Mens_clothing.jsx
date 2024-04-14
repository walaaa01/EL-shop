import React, { useEffect, useState } from 'react';
import "bootstrap";
import { useParams } from 'react-router-dom'

function Mens_clothing() {
  /* to set up Products of corresponding category : */
  const [products, setProducts] = useState([])
  const {categoryName} = useParams();

  /* ------------------------------------------------------------------------------ */

  /* to search for the product by ID : */
  const [productID, setProductID] = useState(null)
  const [searchProduct, setSearchProduct] = useState("")
  
 
  const HandleSearch = async(searchProduct)=>{
    const url = `https://fakestoreapi.com/products/${searchProduct}`
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson)
    setProductID(responseJson)
        
  }
  /*useEffect(()=>{
      HandleSearch(productID)
  },[productID])*/
     
        
  const handleInputChange = (e) => {
    setSearchProduct(e.target.value);
  };

  const Searching = () => {
    HandleSearch(searchProduct);
    console.log(searchProduct)
  };



  /* -------------------------------------------------------------------------------------- */


  /* to set up Products of corresponding category : */
  const CategoryProducts = async(cat) =>{
    const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(cat)}`//encodeURIComponent tna7i special caracters(kima el ' fi women's clothing)
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson)
    setProducts(responseJson)
  }

  useEffect(()=>{
    if(categoryName){
      CategoryProducts(categoryName)
    }
    console.log("use effect one : ",categoryName)
  },[categoryName])

  return (
    <div>
      <h2>Welcome To {categoryName} section :</h2>
      Search : <input type='text' placeholder='wachu looking for?' value={searchProduct} onChange={handleInputChange}/>
      <button onClick={Searching} type='submit'>submit</button>
        {productID!=null &&( //if product exists, then proceeds to afficher l details t3 l selected product
          <div key={productID.id} className="productID-details">
            <img src={productID.image} alt={productID.title} style={{ width: '100px', height: 'auto' }} />
            <div>
              <h2>{productID.title}</h2>
              <p>{productID.description}</p>
              <strong>Price: ${productID.price}</strong>
            </div>
          </div>
        )}
    </div>
  )
}

export default Mens_clothing
