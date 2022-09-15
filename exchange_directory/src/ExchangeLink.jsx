import React from 'react';

function ExchangeLink({ svg, link }) {
  return (
    <div className="mb-3.5 xl:flex xl:flex-row xl:items-center">
      <span className="xl:mr-3.5">
        {svg}
      </span>
      <a className="hover:bg-violet-100" href={link} target="_blank" rel="noreferrer">{link}</a>
    </div>
  );
}

export default ExchangeLink;
