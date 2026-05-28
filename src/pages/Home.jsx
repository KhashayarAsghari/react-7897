import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

export default function Home() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then(json => setProducts(json))
    }, [])

    if (!products) {
        return <h1>LOADING...</h1>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {products.map((item) => (
                <ProductCard key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />

            ))}
        </div>
    )
}