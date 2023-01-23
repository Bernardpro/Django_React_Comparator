// import './styles/Home.scss';
import React from "react";
import { useState } from 'react';
import Nav from '../components/Nav';
import MainImage from '../components/MainImage'
import '../styles/pages/login.scss';
import Footer from '../components/Footer';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div id="logIn">
        <Nav/>
        <MainImage slogan ="Trouver le jean qui vous convient !" title="Bernard's Comparator"/>
        <form className = "loginForm">
           
             
            <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(event) => setUsername(event.target.value)}/>
            
            
            
                
            <input type="password" placeholder="Mot de passe" value={password} onChange={(event) => setPassword(event.target.value)}/>
            
            
            <button type="submit">Se connecter</button>
        </form>
        <Footer/>
        </div>
        );
};
export default Login;