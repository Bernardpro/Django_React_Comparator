import React from 'react';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/_menu.scss';
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        setIsOpen(!isOpen);
    }
    return (
        <div className="divMenu">
            <button id="buttonMenu" onClick={handleClick}>Catégories</button>
            {isOpen && (<ul className="menu">
                <NavLink to='/regularjean'><li>Regular </li></NavLink>
                <NavLink to='/slimjean'><li>Slim</li> </NavLink>
                <NavLink to='/straightjean'><li>Straight </li></NavLink>
                <NavLink to='/loosejean'><li>Loose </li></NavLink>
                <NavLink to='/skinnyjean'><li>Skinny </li></NavLink>
                <NavLink to='/relaxjean'><li>Relax </li></NavLink>
            </ul> 
            )}
        </div>
    );
};

export default Menu;