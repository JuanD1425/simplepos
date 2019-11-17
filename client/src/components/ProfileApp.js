import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './untitled.css'
import NavBar from "./NavBar";
import Dogs from "./Dogs";
import StickyFooter from "./StickyFooter";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Dogs />
      <StickyFooter />
    </div>
  );
}

export default App;
