import logo from './assets/images/logo.svg';
import './styles/App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/SignIn";
import RightJean from './pages/RightJean';
import RippedJean from './pages/RippedJean';
import SlimJean from './pages/SlimJean';
import FlaredJean from './pages/FlaredJean';
import MomJean from './pages/MomJean';
import BoyfriendJean from './pages/BoyfriendJean';
import StraightJean from './pages/StraightJean';
import LargeJean from './pages/LargeJean';
import WideJean from './pages/WideJean';

const App = ()  => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/rightjean" element={<RightJean/>} />
        {/* path="*" if the user inser bad input in URL */}
        <Route path="*" element={<Home/>} />
        <Route path="/rippedjean" element={<RippedJean/>} />
        <Route path="/straightjean" element={<StraightJean/>} />
        <Route path="/slimjean" element={<SlimJean/>} />
        <Route path="/flaredjean" element={<FlaredJean/>} />
        <Route path="/boyfriendjean" element={<BoyfriendJean/>} />
        <Route path="/flaredjean" element={<FlaredJean/>} />
        <Route path="/momjean" element={<MomJean/>} />
        <Route path="/widejean" element={<WideJean/>} />
        <Route path="/largejean" element={<LargeJean/>} />
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;

