import React, { useEffect, useState } from 'react';
import Table from './table/Table';
import Title from '../share/Title';

function Home() {
  const [page, setPage] = useState(1);
  const [exchanges, setExchanges] = useState([]);

  const previousPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  // Get brief exchanges information from CoinGecko
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
      <table className="exchange_table table-auto mb-4">
        <thead className="exchange_table_head">
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Trust Rank</th>
            <th>Country</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody className="exchange_table_body text-center">
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
      {/* Shows the previous button from the second page */}
      {page > 1 ? <button className="previous_button text-xl mr-4 hover:bg-violet-100" onClick={previousPage} type="button">Previous</button> : null}
      <button className="next_button text-xl hover:bg-violet-100" onClick={nextPage} type="button">Next</button>
    </div>
  );
}

export default Home;
