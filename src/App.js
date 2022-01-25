import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import DetailedCrypto from './components/DetailedCrypto';
import News from './components/News';


const App = () => {
  return (
  <div>
    <Profile />
      <div className='app'>
          <div className='navbar'>
            <Navbar />
          </div>
          <div className='main'>
            
              <div className='routes'>
                <Routes>
                  <Route path='/' element={<Homepage/>}/>
                  <Route path='/exchanges' element={<Exchanges/>}/>
                  <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                  <Route path='/crypto/:coinId' element={<DetailedCrypto/>}/>
                  <Route path='/news' element={<News/>}/>
                </Routes>
              </div>
            
          </div>
          <div className='footer'>

          </div>
      </div>
  </div>)
  ;
};

export default App;
