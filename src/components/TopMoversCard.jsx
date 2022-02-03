import React, { useState } from 'react';

const TopMoversCard = ({title, price, prosentChange}) => {

  const [prosentType, setProsentType] = useState('negativeProsent');

  if(parseFloat(prosentChange) > 0) {
    setProsentType = 'negativeOrProsent';
  }

  

  return (
    <div className='moversCard'>
    <div className='moversCardContent'>
      <div className='moversCryptoIcon'>
    
      </div>
      <div className='moversProsent'>
        <div className={prosentType}></div>
        <p>{prosentChange}</p>
      </div>
      <div className='moversDescription'>
        <p className='moversName'>{title}</p>
        <p className="moversValue">{price}</p>
      </div>
    </div>
  </div>
  );
};

export default TopMoversCard;
