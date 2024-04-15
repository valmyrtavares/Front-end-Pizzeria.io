import Link from "next/link"

interface Products {  
    id:string;
    title: string;
    comment: string;
    value: number,
    image: string;
    parent: string;
}

export default async function ItemsPage() {
    const response = await fetch('http://localhost:3333/products')
    const data = await response.json()
    console.log(data)
    return (
        <main>          
            {data.map((product: Products) => (
                <Link className="link-item" href="/"><div className="container" key={product.id}>
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