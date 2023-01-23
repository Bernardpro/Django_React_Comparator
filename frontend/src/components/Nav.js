import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/_nav.scss'
import Menu from './Menu'
const Nav = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) =>( nav.isActive ? "navActive" : "")}>
                    <li id="logo">Bernard's Comparator</li>
                </NavLink>
                <a href="#contact" className={(nav) =>( nav.isActive ? "navActive" : "")}>
                    <li>Nous contacter</li>
                </a>
                <NavLink to="/login" className={(nav) =>( nav.isActive ? "navActive" : "")}>
                    <li>Connexion</li>
                </NavLink>
                <NavLink to="/signin" className={(nav) =>( nav.isActive ? "navActive" : "")}>
                    <li>S'incrire </li>
                </NavLink>
                <li><Menu/></li>
                
            </ul> 
        </div>
    );
};

export default Nav;