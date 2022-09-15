import React, { useEffect, useState } from 'react';
import Table from './Table';
import Title from './Title';

function Home() {
  const [page, setPage] = useState(1);
  const [exchanges, setExchanges] = useState([]);

  const previousPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

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

    <div className="self-center">
      <Title title="Exchange Directory" />
      <table className="table-auto mb-4">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Trust Rank</th>
            <th>Country</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody className="text-center">
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
      {page > 1 ? <button className="text-xl mr-4 hover:bg-violet-100" onClick={previousPage} type="button">Previous</button> : null}
      <button className="text-xl hover:bg-violet-100" onClick={nextPage} type="button">Next</button>
    </div>

  );
}

export default Home;
