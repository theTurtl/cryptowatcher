import React from 'react';
import TopMoversCard from './TopMoversCard';

const Homepage = () => {
  return (
  <div className='homePageLayout'>
      <div className='homeView'>

        <div className='globalStats'>
          <div className='globalContent'>
            <p className='globalTitle'>Global.</p>
            <div className='globalStatsContent'>

              <div className='globalStatsInfoBox'>
                <p className='globalDescriptionTitle'>Total Currencies</p>
                <p className='globalDescription'>12 176</p>
              </div>

              <div className='globalStatsInfoBox'>
                <p className='globalDescriptionTitle'>Total Exchanges</p>
                <p className='globalDescription'>373</p>
              </div>

              <div className='globalStatsInfoBox'>
                <p className='globalDescriptionTitle'>Total Markets</p>
                <p className='globalDescription'>373</p>
              </div>

              <div className='globalStatsInfoBox'>
                <p className='globalDescriptionTitle'>Total <br/>Market Cap</p>
                <p className='globalDescription'>$2.4T</p>
              </div>

              <div className='globalStatsInfoBox'>
                <p className='globalDescriptionTitle'>Total 24h Volume</p>
                <p className='globalDescription'>$92.3B</p>
              </div>

            </div>
          </div>
          
        </div>

        <div className='topMovers'>
          <div className='topMoversView'>
            <p className='topMoversTitle'>Top Movers.</p>
            <div className='topMoversContainer'>

              <TopMoversCard />
              <TopMoversCard />
              <TopMoversCard />
              <TopMoversCard />
              <TopMoversCard />
              <TopMoversCard />

            </div>
          </div>
        </div>

      </div>
  </div>);
};

export default Homepage;
