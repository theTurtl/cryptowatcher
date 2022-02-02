import React from 'react';

const GlobalStatViewer = ({title, value}) => {
  return (
    <div className='globalStatsInfoBox'>
    <p className='globalDescriptionTitle'>{title}</p>
    <p className='globalDescription'>{value}</p>
  </div>);
};

export default GlobalStatViewer;
