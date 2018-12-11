import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';
import Crud from './crud.js';
import Animasi from './animasi.js';
import Example from './ckeditor.js';

import CKEditor from './ckedita.js';
class App extends Component {
  render() {
    return (
      <div>
        <CKEditor/>
        <Example/>
           
      <Navbar/>
      
      {/* <Crud /> */}
        </div>
     
     
     
     
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
    );
  }
}

export default App;
