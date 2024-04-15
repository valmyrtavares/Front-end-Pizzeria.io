import Link from "next/link";

export default function SuportMenusPage(){
    return(
          <div className="btnBackMenu">
            <Link href="/" >Menu Principal</Link>
            <Link href="/">Pedidos</Link>
            </div>
    )
}