import Link from "next/link";

export default function suportMenusPage(){
    return(
          <div className="btnBackMenu">
            <Link href="/" >Menu Principal</Link>
            <Link href="/">Pedidos</Link>
            </div>
    )
}