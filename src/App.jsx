import { useEffect, useState } from "react"
import ProductCard from "./components/ProductCard"

export default function App() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(function (res) {
        return res.json()
      })
      .then((jsonData) => {
        setProducts(jsonData)
        setIsLoading(false)
      })
      .catch(() => alert("get products failed!"))
  }, [])


  if (isLoading) {
    return <h1>LOADING...</h1>
  }

  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
      {products.map(product => <ProductCard key={product.id} image={product.image} title={product.title} price={product.price} />)}
    </div>
  )
}