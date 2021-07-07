import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css";

export default function Header() {

    return (
        <div className="mystyle">
            <nav>
            <label class="logo">Education Hub</label>
            <ul>
                <li>
                <NavLink exact activeClassName="active_class" to='/'>Home </NavLink>
                </li>
                <li>
                <NavLink activeClassName="active_class" to='/about us'>  About Us</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active_class" to='/profile'>  Profile</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active_class" to='/contact'>  Contact us</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active_class" to='/login'>  Login</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active_class" to='/course'>  Course</NavLink>
                </li>
            </ul>   
            </nav>         
        </div>
    )
}
