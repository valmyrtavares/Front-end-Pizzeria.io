import Submenu from "@/components/SubButton"
import ItemsPage from "@/components/itemsList"
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
           <ItemsPage id={params.id} idItems={params.idItems}/>
        </main>
    )
}