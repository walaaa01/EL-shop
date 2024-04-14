import React, { useContext, useEffect, useState } from 'react'
import p1 from "./images/1.png"
import p2 from "./images/2.png"
import p3 from "./images/3.png"
import p4 from "./images/4.png"
//import "./shop.css"
import { useNavigate } from 'react-router-dom'

const pics=[
    {
        id : 1,
        image : p1,
    },
    {
        id : 3,
        image : p3,
    },
    {
        id : 2,
        image : p2,
    },
    {
        id : 4,
        image : p4,
    }
]

function Shop() {
    const [categoryName, setCategoryName] = useState("")
    const [categories, setCategories] = useState([])
    const nav = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    
    const HandleImgClick = (cat)=>{
        //const formatted_nav = cat.split(' ').join('_')
        //const another_formatted_nav = formatted_nav.split("'").join("")

        const formatted_nav = encodeURIComponent(cat)//encodeURIComponent tna7i special caracters(kima el ' fi women's clothing)
        
        nav(`/${formatted_nav}`)


    }
    const ShowCategories = async() =>{
        setIsLoading(true)
        const url = "https://fakestoreapi.com/products/categories"
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(responseJson)
        setCategories(responseJson)
        setIsLoading(false)
    }
    useEffect(()=>{
        ShowCategories()

    },[])
  return (
    <div className='shop'>
       {isLoading ? <div className="flex justify-center items-center">
      <div className="loading loading-infinity loading-lg h-20 w-20 border-b-1 border-gray-900"></div>
    </div> : (
        <>
            <h1 className='shopTitle font-serif mb-9'>WELCOME TO THE SHOP</h1>  
            <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category, index)=>{
                    const pic = pics[index % pics.length]; //pics[0] then pics[1], pics[2] finally pics[3] no 4 cuz index = [0,1,2,3] and pics.lenght == 4
                    return(
                        <div key={index} >
                            <div className='flex flex-col w-full max-w-sm bg-dark rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full'>
                                    {pic && (
                                    <div className="card card-compact w-75 bg-base-100 shadow-xl"> 
                                        <img src={pic.image} alt={`Category ${index}`} onClick={()=>{HandleImgClick(category)}} />
                                        <div className="card-body">
                                            <h2 className="card-title text-2xl font-bold tracking-tight text-balance">{category}</h2>
                                            <p className='text-lg'>check out the {category} items</p>
                                            <div className="card-actions justify-end">
                                                <button onClick={()=>{HandleImgClick(category)}} className="btn btn-primary">Explore Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                            </div>     
                        </div>
                    );
                })}
            </div>
        </>
    )}
      
        
    </div>
  )
}

export default Shop


/*const HandleImgClick = (cat)=>{
        const formatted_nav = cat.split(' ').join('_')
        const another_formatted_nav = formatted_nav.split("'").join("")
        nav(`/${another_formatted_nav}`)


    }*/