import React, { useEffect, useState } from 'react';
import Table from './Table';

function Home() {
  const [page] = useState(1);
  const [exchanges, setExchanges] = useState([]);

  // const loadMorePage = () => {
  //   setPage(page + 1);
  // };

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/exchanges?per_page=10&page=${page}`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
        }),
      },
    )
      .then((res) => res.json())
      .then((response) => {
        setExchanges(response);
      });
  }, [page]);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Logo</th>
          <th>Name</th>
          <th>Trust Rank</th>
          <th>Country</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {exchanges.map((exchange) => (
          <Table
            key={exchange.name}
            id={exchange.id}
            logo={exchange.image}
            name={exchange.name}
            trustRank={exchange.trust_score_rank}
            country={exchange.country}
            link={exchange.url}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Home;
