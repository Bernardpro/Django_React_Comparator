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
                <NavLink to='/rightjean'><li>Jean Droit</li></NavLink>
                <NavLink to='/slimjean'><li>Jean Slim</li></NavLink>
                <NavLink to='/straightjean'><li>Jean Straight</li></NavLink>
                <NavLink to='/rippedjean'><li>Jean Déchiré</li></NavLink>
                <NavLink to='/largejean'><li>Jean Large</li></NavLink>
                <NavLink to='/momjean'><li>Jean Mom</li></NavLink>
                <NavLink to='/boyfriendjean'><li>Jean Boyfriend</li></NavLink>
                <NavLink to='/flaredjean'><li>Jean Patte D'EPH</li></NavLink>
                <NavLink to='/widejean'><li>Jean Wide</li></NavLink>
            </ul> 
            )}
        </div>
    );
};

export default Menu;