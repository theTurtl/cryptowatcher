import React from 'react';
import NewsCard from './NewsCard';
import TopMoversCard from './TopMoversCard';
import millify from 'millify';
import { Link } from 'react-router-dom';
import GlobalStatViewer from './GlobalStatViewer';

const Homepage = () => {
  return (
  <div className='homePageLayout'>
      <div className='homeView'>

        <div className='globalStats'>
          <div className='globalContent'>
            <p className='globalTitle'>Global.</p>
            <div className='globalStatsContent'>
              
              <GlobalStatViewer title="Total Currencies" value="12 176"/>
              <GlobalStatViewer title="Total Exchanges" value="373"/>
              <GlobalStatViewer title="Total Markets" value="373"/>
              <GlobalStatViewer title="Total Market Cap" value="$2.4T"/>
              <GlobalStatViewer title="Total 24h Volume" value="$92.3B"/>

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

        <div className='totalMarketCap'>
          <p className='marketCapTitle'>Total Market Cap.</p>
          <div className='chartView'>
            <div className='chartNavLine'>
              <div className='chartNavContent'>

                <div className='chartNavLeft'>
                  <p className='valutaType'>USD</p>
                  <p className='totalMarketValue'>1.659 Trillion</p>
                  <div className='marketCapProsent'>
                    <div className='negativeOrPositive'></div>
                    <p>19.7%</p>
                  </div>
                </div>
                
                <div className='chartNavRight'>
                  <div className='chartTimeframe'>1H</div>
                  <div className='chartTimeframe'>1D</div>
                  <div className='chartTimeframe'>1W</div>
                  <div className='chartTimeframe'>1M</div>
                  <div className='chartTimeframe'>1Y</div>
                  <div className='chartTimeframe'>ALL</div>
                </div>

              </div>
            </div>
            <div className='marketChart'></div>
          </div>
        </div>

        <div className='newsView'>
          <p className='newsTitle'>News.</p>
          <div className='newsCardView'>
            
            <div className='newsCard'>
              <div className='upperPart'>
                <p className='cardTitle'>Bitcoin Magazine</p>
                <p className='timeSince'>6 hours ago</p>
                <div className='newsCryptoId'>BTC</div>
              </div>
              <div className='newsDescription'>
                <p className='newsText'>U.S. Real Estate Company Harbor To Accept Bitcoin</p>
              </div>
            </div>

            <NewsCard newsSource="test1" timePublished="test2" newsDescription="test3" cryptoId="BTC" />
            <NewsCard newsSource="Bitcoin Magazine" 
                timePublished="6 hours ago" 
                newsDescription="U.S. Real Estate Company Harbor To Accept Bitcoin" 
                cryptoId={"BTC"} />

            <NewsCard newsSource="Bitcoin Magazine" 
                            timePublished="6 hours ago" 
                            newsDescription="U.S. Real Estate Company Harbor To Accept Bitcoin" 
                            cryptoId={"BTC"} />

            <NewsCard newsSource="Bitcoin Magazine" 
                            timePublished="6 hours ago" 
                            newsDescription="U.S. Real Estate Company Harbor To Accept Bitcoin" 
                            cryptoId={"BTC"} />

            <NewsCard newsSource="Bitcoin Magazine" 
                            timePublished="6 hours ago" 
                            newsDescription="U.S. Real Estate Company Harbor To Accept Bitcoin" 
                            cryptoId={"BTC"} />



          </div>
        </div>

      </div>
  </div>);
};

export default Homepage;
