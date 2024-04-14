import React, { createContext, useState, useEffect } from 'react'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from './FireBase_config'

export const DisplayProds = createContext();
function CartContext(props) {
    const [cart, setCart] = useState([])
    const [btnClick, setBtnClick] = useState({})
    const [totality, setTotality] = useState(0)
    
    const dataRef = collection(db, "first")
    const [first, setFirst] = useState([])


  /* ------------------------------------------------------------------------------ */

  const addingToCart = (product)=>{
    
    setFirst(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ?  { ...item, quantity: item.quantity + 1} : item
        );
        
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setBtnClick((prevMsg)=>{
      return(
        {
          ...prevMsg,
          [product.id] : true
        }
      )
    })
  }
  const ReduceQuantity = (product)=> {
    setFirst(currentCart => 
      currentCart.reduce((nextCart, item)=>{
        if(item.id === product.id ){
          if(item.quantity>1){
            nextCart.push({...item, quantity : item.quantity -1})
          }
        }
        else{
          nextCart.push(item)
        }
        return nextCart;
      },[])
      )
    }

    const removingFromCart= (product) =>{
      setFirst((prevCart)=>{
        return(
          prevCart.filter((item)=> item.id !== product.id)
        )
      })
    }
  const ProductQuantity = (product) =>{
    setFirst((prev)=>{
      return prev.map((item)=>{
        return(
          item.id === product.id ? {...item, quantity : item.quantity - 1} : item
        )
      })
    })
  }

  const TotalPrice = (product) =>{
    setFirst(currentCart=>{  
      const existingP = currentCart.find(item => item.id === product.id);
      if(existingP){
        return Math.round(existingP.quantity * existingP.price);
      }
      return 0;
    })
  }
  
  

  const HandleAdding = async (product) => {
    const cartQuery = query(dataRef, where("productID", "==", product.id));
    const querySnapshot = await getDocs(cartQuery);
  
    if (!querySnapshot.empty) {
      // code for updating quantity  :
      querySnapshot.forEach(async (doc) => {
        const docData = doc.data();
        const newQuantity = docData.quantity + 1;
        await updateDoc(doc.ref, { quantity: newQuantity });
        refreshCart();
      });
    } else {
      await addDoc(dataRef, {
        CreatedAt: serverTimestamp(),
        productID: product.id,
        productPrice: product.price,
        productTitle: product.title,
        quantity: 1,
        productImage : product.image,
      });
      refreshCart();
    }
  };

  const HandleReducing = async(product) =>{
    console.log("the prod id : ",)
    const cartQuery = query(dataRef,where("productID", "==", product.productID));
    const querySnapshot = await getDocs(cartQuery);
    if(!querySnapshot.empty){
      querySnapshot.forEach(async(doc)=>{
        const newQuantity = doc.data().quantity>1 ? doc.data().quantity -1 : await deleteDoc(doc.ref)
        await updateDoc(doc.ref, {quantity : newQuantity})
        refreshCart();
      })
    }
    
  }

  const HandleRemoving = async(product) =>{
    const cartQuery = query(dataRef,where("productID", "==", product.productID));
    const querySnapshot = await getDocs(cartQuery);
  
    if(!querySnapshot.empty){
      querySnapshot.forEach(()=>{
        deleteDoc(doc(db, "first", product.id))
        refreshCart();

      })
    }
  }

  const refreshCart = async () => {
    const dataQuery = query(dataRef, orderBy("CreatedAt"));
    const querySnapshot = await getDocs(dataQuery);
    const first = [];
    querySnapshot.forEach((doc) => {
      first.push({ ...doc.data(), id: doc.id });
    });
    setFirst(first);
  }

  useEffect(()=>{
    refreshCart();
  },[])
  
  return (
    <div>
      <DisplayProds.Provider value={{cart, addingToCart, ReduceQuantity, ProductQuantity, TotalPrice, btnClick, removingFromCart, HandleAdding, first, HandleReducing, HandleRemoving}}>
        {props.children}
      </DisplayProds.Provider>
    </div>
  )
}

export default CartContext

/*const addToCart = async (userId, productToAdd) => {
  const cartRef = firestore.collection('carts').doc(userId); // Reference to the user's cart document
  const cartSnapshot = await cartRef.get();
  
  if (!cartSnapshot.exists) {
    // Handle case where the cart does not exist yet
    const newCartData = {
      products: [{ ...productToAdd, quantity: 1 }] // Initialize with the product to add
    };
    await cartRef.set(newCartData);
    return;
  }

  let cartData = cartSnapshot.data();
  let { products } = cartData;
  const productIndex = products.findIndex(p => p.productId === productToAdd.productId);

  if (productIndex !== -1) {
    // Product exists, update quantity
    products[productIndex].quantity += 1; // Adjust based on how much you're adding
  } else {
    // Product does not exist, add to cart
    products.push({ ...productToAdd, quantity: 1 });
  }

  // Update the cart document with the new products array
  await cartRef.update({ products });
};
*/