import React, { useEffect, useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import Title from '../share/Title';
import ExchangeInfo from './exchangeInfo/ExchangeInfo';

function ExchangeDetails() {
  const [exchangeInfo, setExchangeInfo] = useState([]);

  const location = useLocation();
  const { id } = useParams();

  // Get detailed information about the exchange using the exchange's ID value
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/exchanges/${location.state || id}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setExchangeInfo(response);
      });
  }, [location.state]);

  return (
    <div>
      <Title title={`Exchange Detail-${exchangeInfo.name}`} />
      <Link className="exchange_detail_back" to="/">
        ⬅ Back
      </Link>
      <div className="exchange_detail flex flex-col xl:flex-row">
        <div className="exchange_detail_name m-[auto] h-[300px] w-[300px] flex flex-col items-center justify-center">
          <img className="w-24 h-24 mb-3.5" src={exchangeInfo.image} alt={exchangeInfo.name} />
          {exchangeInfo.name}
        </div>
        <div className="exchange_detail_info max-w-4xl">
          <ExchangeInfo
            infoTitle="description"
            infoDesc={exchangeInfo.description || `This is ${exchangeInfo.name} centralized exchange`}
          />
          <div className="flex flex-col xl:flex-row xl:justify-between">
            <ExchangeInfo
              infoTitle="Country"
              infoDesc={exchangeInfo.country}
            />
            <ExchangeInfo
              infoTitle="Trust Rank"
              infoDesc={exchangeInfo.trust_score_rank}
            />
            <ExchangeInfo
              infoTitle="Year Built"
              infoDesc={exchangeInfo.year_established}
            />
          </div>
          <ExchangeInfo
            infoTitle="Link"
            twitter={`https://twitter.com/${exchangeInfo.twitter_handle}`}
            telegram={exchangeInfo.telegram_url}
            facebook={exchangeInfo.facebook_url}
            reddit={exchangeInfo.reddit_url}
            slack={exchangeInfo.slack_url}
            otherOne={exchangeInfo.other_url_1}
            otherTwo={exchangeInfo.other_url_2}
          />
        </div>
      </div>
    </div>
  );
}

export default ExchangeDetails;
