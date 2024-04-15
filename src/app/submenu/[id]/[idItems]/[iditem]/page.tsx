type PageParams = {
    params:{
        id:string
    }
}

export default function SubmenuPage({params}:PageParams){  
    return(
        <main>          
           <p>{params.id}</p>
        </main>
    )
}