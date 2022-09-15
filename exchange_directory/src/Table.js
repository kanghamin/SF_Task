import React, {useCallback} from 'react'
import {useNavigate} from 'react-router-dom';

const Table = (props) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate(`/exchanges/${props.id}`, {state: props}, {replace: true}), [props, navigate]);

  return (
    <tr onClick={handleOnClick}>
      <td>{props.logo}</td>
      <td>{props.name}</td>
      <td>{props.trustRank}</td>
      <td>{props.country}</td>
      <td>{props.link}</td>
    </tr>
  )
}

export default Table