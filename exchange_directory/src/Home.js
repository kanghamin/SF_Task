import React from 'react'
import { useEffect, useState } from 'react';

const Home = () => {
  const [page, setPage] = useState(1);
  const [exchanges, setExchanges] = useState([]);

  // const loadMorePage = () => {
  //   setPage(page + 1);
  // }

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/exchanges?per_page=10&page=${page}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        })
      }
    )
    .then(res => res.json())
    .then(response => {
      setExchanges(response)
    })
  }, [page]);


  return (
   <div>

   </div>
  )
}

export default Home