import { Link } from "react-router-dom";

export default function ProductCard({ id, image, title, price }) {

    return (
        <Link to={`/single-product/${id}`}>
            <div className="w-full rounded-md p-4 shadow-md border border-black/50">
                <img src={image} className="w-full rounded-md border object-contain h-80 border-black/50" alt="" />

                <h2 className="text-2xl my-2 font-bold line-clamp-2" title={title}>{title}</h2>

                <span className="text-red-500">{price}</span>

            </div>
        </Link>
    )
}