import React from 'react';

const Navbar = () => {
  return (
  <div className="navView">
    <div className='navbarLogo'></div>
    <div className='navContentView'>

        <div className='navIcons'>
            <div className='navSelection'>
                <div className='homeIcon'></div>
            </div>
            
            <div className='currenciesIcon'></div>
            <div className='exchangeIcon'></div>
            <div className='newsIcon'></div>
        </div>
        <div className='settingIcon'></div>
    </div>
    
  </div>);
};

export default Navbar;
