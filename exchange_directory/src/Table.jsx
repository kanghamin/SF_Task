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
    <tr className="cursor-pointer border-2 border-solid border-gray-100" onClick={handleOnClick}>
      <td><img className="w-12 h-12" src={logo} alt={name} /></td>
      <td>{name}</td>
      <td>{trustRank}</td>
      <td>{country || 'Unknown'}</td>
      <td><a className="hover:bg-violet-100" href={link} target="_blank" rel="noreferrer">{link}</a></td>
    </tr>
  );
}

export default Table;
