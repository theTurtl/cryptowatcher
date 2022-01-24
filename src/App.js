import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => {
  return (
  <div>
    <Profile />
      <div className='app'>
          <div className='navbar'>
            <Navbar />
          </div>
          <div className='main'>
              
          </div>
          <div className='footer'>

          </div>
      </div>
  </div>)
  ;
};

export default App;
