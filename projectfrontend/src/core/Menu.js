import React from 'react'
import {Link, withRouter} from "react-router-dom";
import { useLocation } from "react-router-dom";

const Menu = () => {
    const location = useLocation();

const currentTab = (path) => {
   
    if (location.pathname === path) {
        return { color: "#d35400" };
    } else {
        return { color: "#ecf0f1" };
    }
};

const navLinkStyle = {
    marginRight: '10px', // Adjust the margin to add spacing between nav items
    textDecoration: 'none' // Remove underlin
};


return (
<div>
  <ul className="nav nav-tabs">
    <li className="nav-item">
        <Link style={{...navLinkStyle, ...currentTab( "/")}} className="navLinkStyle" to="/">
            Home
        </Link>
    </li>
    <li className="nav-item">
        <Link style={{...navLinkStyle, ...currentTab( "/cart")}} className="navLinkStyle" to="/cart">
            Cart
        </Link>
    </li>
    <li className="nav-item">
        <Link style={{...navLinkStyle, ...currentTab( "/user/dashboard")}} className="navLinkStyle" to="/user/dashboard">
            Dashboad
        </Link>
    </li>
    <li className="nav-item">
        <Link  style={{...navLinkStyle, ...currentTab( "/admin/dashboard")}} className="navLinkStyle" to="/admin/dashboard">
            A. Dashboard
        </Link>
    </li>
    <li className="nav-item">
        <Link style={{...navLinkStyle, ...currentTab( "/signin")}} className="navLinkStyle" to="/signin">
            Signin
        </Link>
    </li>
    <li className="nav-item">
        <Link style={{...navLinkStyle, ...currentTab( "/signup")}} className="navLinkStyle" to="/signup">
            Signup
        </Link>
    </li>
    <li className="nav-item">
        <Link style={{...navLinkStyle, ...currentTab( "/signout")}} className="navLinkStyle" to="/signout">
            Signout
        </Link>
    </li>
  </ul>
</div>
)
}

export default Menu