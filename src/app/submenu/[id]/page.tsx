import Submenu from "@/components/SubButton"

// Pagina Submenu

type PageParams = {
    params:{
        id:string
    }
}

export default function SubmenuPage({params}:PageParams){  
    return(
        <main>          
            <Submenu id={params.id}/>
        </main>
    )
}