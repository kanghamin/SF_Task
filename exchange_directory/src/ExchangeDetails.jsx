import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

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
      <Link to="/" />
      {exchangeInfo.name}
      {exchangeInfo.country}
      {exchangeInfo.trust_score_rank}
      {exchangeInfo.image}
      {exchangeInfo.year_established}
      {exchangeInfo.description ? (
        <p>{exchangeInfo.description}</p>
      ) : (
        `This is ${exchangeInfo.name} centralized exchange`
      )}
      {exchangeInfo.facebook_url ? <p>{exchangeInfo.facebook_url}</p> : null}
      {exchangeInfo.reddit_url ? <p>{exchangeInfo.reddit_url}</p> : null}
      {exchangeInfo.telegram_url ? <p>{exchangeInfo.telegram_url}</p> : null}
      {exchangeInfo.slack_url ? <p>{exchangeInfo.slack_url}</p> : null}
      {exchangeInfo.twitter_handle ? (
        <p>{exchangeInfo.twitter_handle}</p>
      ) : null}
      {exchangeInfo.other_url_1 ? <p>{exchangeInfo.other_url_1}</p> : null}
      {exchangeInfo.other_url_2 ? <p>{exchangeInfo.other_url_2}</p> : null}
    </div>
  );
}

export default ExchangeDetails;
