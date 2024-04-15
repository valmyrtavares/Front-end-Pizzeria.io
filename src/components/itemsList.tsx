"use client"

import Link from "next/link"
import React from "react";

interface ItemsPageProps {
    id: string;
    idItems: string;
}

interface Products {  
    id:string;
    title: string;
    comment: string;
    value: number,
    image: string;
    parent: string;
}

export default  function ItemsPage ({id, idItems}: ItemsPageProps) {
   
    const [data, setData] = React.useState<Products[]>([]);
    const [filteProduct, setFilterProduct] = React.useState<Products[]>([])


    React.useEffect(()=> {
        const fetchData = async ()=>{
            try{
                const response = await fetch('http://localhost:3333/products')
                const jsonData = await response.json()
                setData(jsonData)
            }catch(error){
                console.error('Error fetch data', error)
            }
        } 
        fetchData();
    },[id])

    React.useEffect(()=>{
        const filterData = data.filter(item => item.parent === idItems)
        setFilterProduct(filterData)
    },[data])
 
    return (
        <main>          
            <h1>{id}</h1>
            <h1>{idItems}</h1>
            {filteProduct.map((product: Products) => (
                <Link className="link-item" href={`/submenu/${id}/${idItems}/${product.id}`}><div className="container" key={product.id}>
                    <div>
                  <h2>{product.title}</h2>
                  <p>{product.comment} asdf asdf asdf asdf asdf asfasdfasd fas dfasdf asdf asdf asdf saf asdf asdf asdfasd fasdf fadfa sdf asdf asdfasdf</p>
                  <h4>R$ {product.value},00</h4>

                    </div>
                    <div>
                      <img src={product.image} alt="" />
                    </div>
                </div>
                </Link>
            ))
            }
        </main>
    )
}