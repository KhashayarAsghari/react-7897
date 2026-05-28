import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className="border-b shadow-lg">
            <div className="py-3 max-w-screen-lg mx-auto">
                <nav>
                    <ul className="flex justify-center items-center gap-4">
                        <li className="font-bold text-lg cursor-pointer underline">
                            <Link to="/about">
                                درباره ما
                            </Link>
                        </li>
                        <li className="font-bold text-lg cursor-pointer underline">تماس با ما</li>
                        <li className="font-bold text-lg cursor-pointer underline">خانه</li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}