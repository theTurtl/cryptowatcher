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
            
            <div className='footer'>
              <div className='logo'></div>
              <div className='footerNav'>
                <div className='rightsReserved'>
                  olook.com<br/>All rights reserved
                </div>
                <div className='footerNavView'>
                  <Link to="/"><p className='footerNavLink'>Home</p></Link>
                  <div className='divider'></div>
                  <Link to="/exchanges"><p className='footerNavLink'>Exchanges</p></Link>
                  <div className='divider'></div>
                  <Link to="/news"><p className='footerNavLink'>News</p></Link>
                </div>
              </div>
            </div>
          </div>
          
      </div>
  </div>)
  ;
};

export default App;
