import { NavLink } from "react-router-dom";
import './sidebar.css';
function Menu(){
    return(
        <>
            <div className="side">
                <ul className="navbar-nav">
                    <li className="nav-item m">
                        <NavLink className="nav-link" to="/reg">Register ( New User )</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/log">Login ( Existing User )</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Menu;