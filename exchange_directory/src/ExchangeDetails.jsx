import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Title from './Title';
import ExchangeInfo from './ExchangeInfo';

function ExchangeDetails() {
  const [exchangeInfo, setExchangeInfo] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/exchanges/${location.state}`, {
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
      <Link to="/">
        ⬅ Back
      </Link>
      <div className="flex flex-col xl:flex-row">
        <div className="exchange_name m-[auto] h-[300px] w-[300px] flex flex-col items-center justify-center">
          <img className="w-24 h-24 mb-3.5" src={exchangeInfo.image} alt={exchangeInfo.name} />
          {exchangeInfo.name}
        </div>
        <div className="exchange_info max-w-4xl">
          <ExchangeInfo
            infoTitle="description"
            infoDesc={exchangeInfo.description ? (
              <p>{exchangeInfo.description}</p>
            ) : (
              `This is ${exchangeInfo.name} centralized exchange`
            )}
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
            twitter={exchangeInfo.twitter_handle ? (
              <p>{`https://twitter.com/${exchangeInfo.twitter_handle}`}</p>
            ) : null}
            telegram={exchangeInfo.telegram_url ? <p>{exchangeInfo.telegram_url}</p> : null}
            facebook={exchangeInfo.facebook_url ? <p>{exchangeInfo.facebook_url}</p> : null}
            reddit={exchangeInfo.reddit_url ? <p>{exchangeInfo.reddit_url}</p> : null}
            slack={exchangeInfo.slack_url ? <p>{exchangeInfo.slack_url}</p> : null}
            otherOne={exchangeInfo.other_url_1 ? <p>{exchangeInfo.other_url_1}</p> : null}
            otherTwo={exchangeInfo.other_url_2 ? <p>{exchangeInfo.other_url_2}</p> : null}
          />
        </div>
      </div>
    </div>
  );
}

export default ExchangeDetails;
