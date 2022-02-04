import React from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const News = () => {
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: 6})
  console.log(cryptoNews);

  const newsq = cryptoNews?.value;
  console.log(newsq);
  return <div>
      Newstest
  </div>;
};

export default News;
