import { Link } from "react-router-dom"

export default function Menu(){

    return(
        <nav className="Menu">
            <Link to='/'>Principal</Link>
            <span> | </span>
        </nav>
    )
}