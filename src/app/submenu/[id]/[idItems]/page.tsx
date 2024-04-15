import Submenu from "@/components/SubButton"
import ItemsPage from "@/components/itemList"
import SuportMenusPage from "@/components/suportMenus"

// Pagina de produtos (items)
type PageParams = {
    params:{
        idItems:string,
        id:string
    }
}

export default function SubmenuPage({params}:PageParams){  
    return(
        <main>     
            <SuportMenusPage/>     
            <p>{params.idItems}</p>
            <p>{params.id}</p>
           <ItemsPage id={params.id} idItems={params.idItems}/>
        </main>
    )
}