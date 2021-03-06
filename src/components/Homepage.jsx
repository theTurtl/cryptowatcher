import React, { useState } from 'react';
import NewsCard from './NewsCard';
import TopMoversCard from './TopMoversCard';
import millify from 'millify';
import { Link } from 'react-router-dom';
import GlobalStatViewer from './GlobalStatViewer';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';



const Homepage = () => {
  const { data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  const [cryptos, setCryptos ]= useState(data?.data?.coins);

  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: 1})
  const newsArticle = cryptoNews?.value;

  if(isFetching) return 'Loading...';  

  console.log(cryptoNews);
  console.log(cryptoNews[0]);


  return (
  <div className='homePageLayout'>
      <div className='homeView'>

        <div className='globalStats'>
          <div className='globalContent'>
            <p className='globalTitle'>Global.</p>
            <div className='globalStatsContent'>
      
              <GlobalStatViewer title="Total Currencies" value={millify(globalStats.total)}/>
              <GlobalStatViewer title="Total Exchanges" value={globalStats.totalExchanges}/>
              <GlobalStatViewer title="Total Markets" value={millify(globalStats.totalMarkets)}/>
              <GlobalStatViewer title="Total Market Cap" value={"$" + millify(globalStats.totalMarketCap)}/>
              <GlobalStatViewer title="Total 24h Volume" value={"$" + millify(globalStats.total24hVolume)}/>

            </div>
          </div>
          
        </div>
        
        <div className='topMovers'>
          <div className='topMoversView'>
            <p className='topMoversTitle'>Top Movers.</p>
            <div className='topMoversContainer'>
              {cryptos.slice(0,6).map( (cryptoCoin) => (
                  <TopMoversCard 
                    title={cryptoCoin.symbol} 
                    price={"$" + millify(cryptoCoin.price)} 
                    prosentChange={cryptoCoin.change}
                    coinIcon={cryptoCoin.iconUrl}
                    />
                ))}
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

            {newsArticle.map((news) => (
              <NewsCard 
              newsSource={news.provider[0].name}
              timePublished={news.datePublished} 
              newsDescription={news.name} 
              />
            ))}
          </div>
        </div>

      </div>
  </div>);
};

export default Homepage;
