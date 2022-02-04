import React from 'react';

const NewsCard = ({newsSource, timePublished, newsDescription}) => {

  const indexOfTime = timePublished.indexOf('T');
  const date = timePublished.substring(0, indexOfTime);
  const time = timePublished.substring(indexOfTime+1).substring(0, 5);
  let newTimePublished = date + ' ' + time;

  	
  var today = new Date();
  var todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  if (date == '2022-02-03') {
    newTimePublished = '6 hours ago';
  }

  return (
    <div className='newsCard'>
    <div className='upperPart'>
      <p className='cardTitle'>{newsSource}</p>
      <p className='timeSince'>{newTimePublished}</p>
      <div className='newsCryptoId'>BTC</div>
    </div>
    <div className='newsDescription'>
      <p className='newsText'>{newsDescription}</p>
    </div>
  </div>);
};

export default NewsCard;
