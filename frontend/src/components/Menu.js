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
                <NavLink to='/regularjean'><li>Regular Jean</li></NavLink>
                <NavLink to='/slimjean'><li>Slim Jean</li> </NavLink>
                <NavLink to='/straightjean'><li>Straight Jean</li></NavLink>
                <NavLink to='/loosejean'><li>Loose Jean</li></NavLink>
                <NavLink to='/skinnyjean'><li>Skinny Jean</li></NavLink>
                <NavLink to='/relaxjean'><li>Relax Jean</li></NavLink>
            </ul> 
            )}
        </div>
    );
};

export default Menu;