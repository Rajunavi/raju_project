// import logo from './logo.svg';
// import { useState } from 'react';
// import React, { Component } from 'react';
import './App.css';
import User from './User';


function App() {
 return (
      <div className="App">
        <h1>props in react</h1>
        <User name={'Raju'} email='rajun123@gmail.com' other={{Address:'banglr', mobile:7654}}/>
        <button>click here</button>
        <User name={'Dhoni'} email='dhoni07@gmail.com' other={{Address:'ranchi', mobile:794}}/>
        <User name={'Sakshi'} email='sakshi98@gmail.com' other={{Address:'mubai', mobile:724}}/>
      </div>
      
    );
      
    
  }
  // function Applle() {
    
  //   return (<h1>Apple Fruits</h1>);
    
  // }
  


export default App;

// function User() {
  
//   return (
//     <div className="User">
//       <h1>Hello User Good Morning !</h1>
//     </div>
//   );
// }
