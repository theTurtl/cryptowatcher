import React, { useState } from 'react';

const TopMoversCard = ({title, price, prosentChange, coinIcon}) => {
  let [prosentType, setProsentType] = useState('negativeOrPositive');
  
  let prosentColor = '#00a72a';


  let changeFinnished = prosentChange;
  if(parseFloat(prosentChange) < 0) {
    changeFinnished = prosentChange.substring(1);
    prosentType = ('negativeProsent');
    prosentColor = '#DF2935';
  }

  return (
    <div className='moversCard'>
    <div className='moversCardContent'>
      <div style={{backgroundImage: `url(${coinIcon})`}} className='moversCryptoIcon'>
    
      </div>
      <div style={{backgroundColor: prosentColor}} className='moversProsent' >
        <div className={prosentType}></div>
        <p>{changeFinnished}</p>
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
