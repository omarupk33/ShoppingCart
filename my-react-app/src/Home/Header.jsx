import { Link } from "react-router"
import Nav from './NavBar/Nav'
function Header({numberOfItems}){

    return (
        <header className="header">
            <h1>
                Doctorina 
            </h1>
            <Nav numberOfItems={numberOfItems}></Nav>
        </header>
    )
}

export default Header