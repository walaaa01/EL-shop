import React, { useEffect, useState } from 'react';
import "bootstrap";

function Laptops() {
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

    const selectProduct=(productID)=>{
        const prod = HandleSearch(productID.id)
        //console.log(prod)
    }
    
    return (
    <div>
        <h1>Welcome</h1>
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

export default Laptops




/*const HandleSearch = async(product) =>{
    const response = await axios.get(
        'https://taobao-tmall-tao-bao-data-service.p.rapidapi.com/search/searchSuggestions',
    {
        params: {query: product},
        headers :{
            'X-RapidAPI-Key': 'e5c30ea635mshd8ca107688585d9p16edb9jsn8c2ab3cdcf0e',
            'X-RapidAPI-Host': 'taobao-tmall-Tao-Bao-data-service.p.rapidapi.com',
        }
    })
    setproductID(response.data.items)
}*/