import React from 'react';

const TopMoversCard = () => {
  return (
    <div className='moversCard'>
    <div className='moversCardContent'>
      <div className='moversCryptoIcon'></div>
      <div className='moversProsent'>
        <div className='negativeOrPositive'></div>
        <p>19.7%</p>
      </div>
      <div className='moversDescription'>
        <p className='moversName'>BTC</p>
        <p className="moversValue">$48.6K</p>
      </div>
    </div>
  </div>
  );
};

export default TopMoversCard;
