import Item from "@/components/item"

type PageParams = {    params:{
      
        iditem:string
    }
}

export default function SubmenuPage({params}:PageParams){  
    return(
        <main>                    
            <Item  idItem={params.iditem}/>
        </main>
    )
}