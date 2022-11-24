import {
   Link
  } from "react-router-dom";
import "./NavBar.css"
export default function nav(){
    return(
        <nav className="navBar">
        
        <ul className="listLinks">
            <li>
            <Link to="/" className="siteTitle">Dashboard</Link>
            </li>
            <li>
            <Link to="/page1" className="siteTitle">Page 1</Link>
            </li>
            <li>
            <Link to="/page2" className="siteTitle">Page 2</Link>
            </li>
        </ul>
            

        </nav>

    )
}