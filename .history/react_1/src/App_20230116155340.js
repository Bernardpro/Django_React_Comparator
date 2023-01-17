import './styles/App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/SignIn";
import RegularJean from './pages/RegularJean';
import RelaxJean from './pages/RelaxJean';
import SlimJean from './pages/SlimJean';
import LooseJean from './pages/LooseJean';
import SkinnyJean from './pages/SkinnyJean';
import StraightJean from './pages/StraightJean';

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
        <Route path="/regularjean" element={<RegularJean/>} />
        {/* path="*" if the user inser bad input in URL */}
        <Route path="*" element={<Home/>} />
        <Route path="/loosejean" element={<LooseJean/>} />
        <Route path="/straightjean" element={<StraightJean/>} />
        <Route path="/slimjean" element={<SlimJean/>} />
        <Route path="/skinnyjean" element={<SkinnyJean/>} />
        <Route path="/relaxjean" element={<RelaxJean/>} />
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;
