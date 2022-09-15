import React from 'react';

/**
 * This is a social media property value
 *
 * @property {string} svg - the social media image of the exchange
 * @property {string} link - the social media link of the exchange
 */
function ExchangeLink({ svg, link }) {
  return (
    <div className="exchange_link mb-3.5 xl:flex xl:flex-row xl:items-center">
      <span className="exchange_link_icon xl:mr-3.5">
        {svg}
      </span>
      <a className="exchange_link_url hover:bg-violet-100" href={link} target="_blank" rel="noreferrer">{link}</a>
    </div>
  );
}

export default ExchangeLink;
