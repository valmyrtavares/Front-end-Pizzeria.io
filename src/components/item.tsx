"use client"

import Link from "next/link"
import React from "react";
import SuportMenusPage from "./suportMenus";

interface ItemPageProps {  
    idItem: string;
}

interface Product {  
    id:string;
    title: string;
    comment: string;
    value: number,
    image: string;
    parent: string;
}

export default  function ItemPage ({ idItem}: ItemPageProps) {
   
    const [data, setData] = React.useState<Product>();   


    React.useEffect(()=> {
        const fetchData = async ()=>{
            try{
                const response = await fetch(`http://localhost:3333/product?id=${idItem}`)
                const jsonData = await response.json()
                console.log(jsonData)
                setData(jsonData)
               
            }catch(error){
                console.error('Error fetch data', error)
            }
        } 
        fetchData();
    },[idItem])


   
    

   
 if(data){
     return (
         <main className="containerbox">        
            <div>
                <img src={data.image} alt="" />
            </div>
            <SuportMenusPage/>
            <div >
                <div className="textProduct"> 
                    <h1>{data.title}</h1>
                    <p>{data.comment}</p>
                </div>
            </div>

              
         </main>
     )

 }
}