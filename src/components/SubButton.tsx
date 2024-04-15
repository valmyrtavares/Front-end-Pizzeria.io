"use client"

import Link from "next/link";
import React from "react";
import Banner from "./banner";
import SuportMenusPage from "./suportMenus"

interface BtnMenu{
    id:string;
    title:string;
    category: string;
    address: string;
    parent:string;
}

type SubmenuProps = {
  id: string;
};

const Submenu: React.FC<SubmenuProps> = ({ id }) => {

    const [data, setData] = React.useState<BtnMenu[]>([])
    const [filteBtn, setFilterBtn] = React.useState<BtnMenu[]>([])

    React.useEffect(() =>{
        const fetchData = async ()=>{
            try{
                const response = await fetch('http://localhost:3333/btnMenus');
                const jsonData = await response.json();              
                 setData(jsonData)                
            }catch(error){
                console.error('Error fetching data ', error)
            }
        }
        fetchData();
    },[id])
    
      React.useEffect(() => {
        const filteredData = data.filter(item => item.parent === id)
        setFilterBtn(filteredData)        
    }, [data, id])

    return(
         <main>
            <Banner/>
          <SuportMenusPage/>
            {filteBtn.map((btn: BtnMenu) => (
                <div className="btn" key={btn.id}>
                    <button><Link href={`/submenu/${id}/pizzas`}
                    >{btn.title}</Link></button>
                </div>
            ))
            }
        </main>
    ) 
}

export default Submenu;