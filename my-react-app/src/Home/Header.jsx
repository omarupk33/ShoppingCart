import { Link } from "react-router"
function Header(){

    const navBarList = ['Home', 'Shop', 'Cart']

    return (
        <header className="header">
            <h1>
                Doctorina 
            </h1>
            <nav className="main-nav">
            <ul className="nav-list">
                {navBarList.map(e =>{
                    return <li key={e}>
                        <Link to={e.toLowerCase()}>{e}</Link>
                    </li>
                })}
            </ul>
            </nav>
        </header>
    )
}

export default Header