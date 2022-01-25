import React from 'react';
import { Link } from 'react-router-dom';



function buttonSelect() {
  
}

const Navbar = () => {
  return (
  <div className="navView">
    <Link to='/'><div className='navbarLogo'></div></Link>
    <div className='navContentView'>

        <div className='navIcons'>
            <div className='navSelection'>
                <Link to='/'><div className='homeIcon'></div></Link>
            </div>
            
            <Link to='cryptocurrencies'><div className='currenciesIcon'></div></Link>
            <Link to='exchanges'><div className='exchangeIcon'></div></Link>
            <Link to='news'><div className='newsIcon'></div></Link>
        </div>
        <div className='settingIcon'></div>
    </div>
    
  </div>);
};

export default Navbar;
