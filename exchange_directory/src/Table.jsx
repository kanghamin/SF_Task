import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function Table({
  id, logo, name, trustRank, country, link,
}) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate(`/exchanges/${id}`, { state: id }, { replace: true }),
    [id, navigate],
  );

  return (
    <tr onClick={handleOnClick}>
      <td>{logo}</td>
      <td>{name}</td>
      <td>{trustRank}</td>
      <td>{country}</td>
      <td>{link}</td>
    </tr>
  );
}

export default Table;
