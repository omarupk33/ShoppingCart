import './nav.css'
import { Link } from 'react-router'
function Nav(){

    const navBarList = ['Home', 'Shop', 'Cart']

    return(
        <nav className="main-nav">
            <ul className="nav-list">
                {navBarList.map(e =>{
                    return <li key={e}>
                        <Link to={e === 'Home' ? '/' : e}>{e}</Link>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Nav