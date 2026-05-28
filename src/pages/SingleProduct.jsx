import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function SingleProduct() {
    const [data, setData] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    if (!data) {
        return (<h1>LOADING...</h1>)
    }

    return (
        <div className="m-2 md:m-4 p-2 md:p-4 rounded-2xl">
            <img src={data.image} className="block w-full max-w-100" alt="" />

            <h1 className="font-bold text-2xl my-4 md:my-8">{data.title}</h1>

            <p className="mb-5">{data.description}</p>

            <span className="font-bold">${data.price}</span>
        </div>
    )
}