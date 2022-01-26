import React from 'react';

const NewsCard = ({newsSource, timePublished, newsDescription, cryptoId}) => {
  return (
    <div className='newsCard'>
    <div className='upperPart'>
      <p className='cardTitle'>{newsSource}</p>
      <p className='timeSince'>{timePublished}</p>
      <div className='newsCryptoId'>{cryptoId}</div>
    </div>
    <div className='newsDescription'>
      <p className='newsText'>{newsDescription}</p>
    </div>
  </div>);
};

export default NewsCard;
