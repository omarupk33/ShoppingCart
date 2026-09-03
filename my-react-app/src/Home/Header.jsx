import { Link } from "react-router"
import Nav from '../NavBar/Nav'
function Header(){

    return (
        <header className="header">
            <h1>
                Doctorina 
            </h1>
            <Nav></Nav>
        </header>
    )
}

export default Header