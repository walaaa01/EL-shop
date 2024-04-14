import React, {useContext, useEffect ,useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { DisplayProds } from './CartContext';
import { Button } from "flowbite-react";


function Electronics() {
  const {addingToCart, btnClick, HandleAdding} = useContext(DisplayProds)
  /* to set up Products of corresponding category : */
  const [products, setProducts] = useState([])
  const {categoryName} = useParams();
  const [itemsCount, setItemsCount] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  
  
//(reduce() sta3malneha bch n3abiw el prev bl id : 0) prev is an empty object {}, product hia l product fih id title...;
    // ktebna "products.reduce(...)" khatr el chy heka bch ysir 3la kol item fl array products
    //f kol iteration, el .reduce() te5ou l params hekom w t initialisi kol id : 0

    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FIRST SOLUTION !!!!!!!!!!!!!!!!!!!!!!!!!!
    useEffect(()=>{ 
      const initialValue = products.reduce((prev, product)=>{ 
        prev[product.id] = 0
        return prev;
      },{});
      setItemsCount(initialValue)
      console.log(initialValue)
    },[products])*/

    //ken el initialValue defined outside useEffect, rahi recalculated f kol render, wli houa ghalet ("too many re-renders" error)
  //khatr lezmeha tkoun calculated only if product.id's !!state!! changes



    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! SECOND SOLUTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    useEffect(()=>{
      const initializeValue = ()=>{
        const initialCount = {}
        products.forEach((product)=>{
          initialCount[product.id] = 0 //initialCount[9] = 0  -->  9 : 0
        })
        setItemsCount(initialCount)
      }
      initializeValue()
    },[products])
    //console.log("itemsCount dial el ElecTronics : ",itemsCount)
  /*
    
    const item = products.find((product)=>product.id === itemID)
    const itemExist = items.find((item)=>item.id === itemID)
    if(itemExist){
      setItems(items.map((item)=>item.id === itemID ? {...item, quantity: setItemsCount[itemID]} : item))
    }
    else{
      setItems([...items, {...item, quantity: setItemsCount[itemID]}])
    }

  } 

   /*useEffect((prodID)=>{
    setItemsCount((prev)=>({
      [prodID] : prev[prodID] +1,
    }))
    
  })*/

  /* ------------------------------------------------------------------------------ */


  /* to set up Products of corresponding category : */
    const CategoryProducts = async(cat) =>{
        setIsLoading(true);
        const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(cat)}`//encodeURIComponent tna7i special caracters(kima el ' fi women's clothing)
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(responseJson)
        setProducts(responseJson)
        setIsLoading(false)
    }

    useEffect(()=>{
        if(categoryName){
            CategoryProducts(categoryName)
        }
        console.log("use effect one : ",categoryName)
    },[categoryName])

    console.log(products)
    return (
      <div>
        {isLoading ? <div className="flex justify-center items-center">
                       <div className="loading loading-infinity loading-lg h-20 w-20 border-b-1 border-gray-900"></div>
                     </div>: (
          <>
            <h2 className="mb-9 shopTitle font-serif  font-serif">Welcome To {categoryName} Section:</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {products.map((product, index) => (
                <div key={index} className='flex flex-col w-full max-w-sm bg-dark border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full'>
                  <img className='p-8 rounded-t-lg' src={product.image} alt='404'/>
                  <div className='px-5 pb-5'>
                    <h5 className='text-xl font-semibold tracking-tight'>{product.title}</h5>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className="text-3xl font-bold">
                        ${product.price}
                      </span>
                      <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); addingToCart(product); HandleAdding(product); }} type='button'>
                        Add TO Cart
                      </button>
                    </div>
                    {btnClick[product.id] && (
                      <div role="alert" className="alert alert-success">
                        <span>item has been confirmed!</span><br/>
                        <Link to="/Cart" className='link link-hover'>Go to Cart</Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
}    

export default Electronics



  
 
  /*
  to search for the product by ID : 
  const [productID, setProductID] = useState(null)
  const [searchProduct, setSearchProduct] = useState("")

  const HandleSearch = async(searchProduct)=>{
    const url = `https://fakestoreapi.com/products/${searchProduct}`
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson)
    setProductID(responseJson)
        
  }
  
  //useEffect(()=>{               !!!! HEDHI BCH TARJA3 TE5DEM !!!!
    //  HandleSearch(productID)
  //},[productID])
     
        
  const handleInputChange = (e) => {
    setSearchProduct(e.target.value);
  };

  const Searching = () => {
    HandleSearch(searchProduct);
    console.log(searchProduct)
  };

  Search : <input type='text' placeholder='wachu looking for?' value={searchProduct} onChange={handleInputChange}/>
      <button onClick={Searching} type='submit'>submit</button>
      {productID!=null &&( //if product exists, then proceeds to afficher l details t3 l selected product
          <div key={productID.id} className="productID-details">
            <img src={productID.image} alt={productID.title} style={{ width: '100px', height: 'auto' }} />
            <div>
              <h2>{productID.title}</h2>
              //{<p>{productID.description}</p>}
              <strong>Price: ${productID.price}</strong>
            </div>
          </div>
        )}

  */
  