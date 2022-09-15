import React from 'react';
import {
  FaTwitter, FaTelegram, FaFacebook, FaReddit, FaSlack, FaLink,
} from 'react-icons/fa';
import ExchangeLink from './exchangeLink/ExchangeLink';

/**
 * This is the property value of the detailed information of the exchange
 *
 * @property {string} infoTitle - the title value of the information
 * @property {string} infoDesc - The description value of the information
 * @property {string} twitter - the twitter url of the exchange
 * @property {string} telegram - the telegram url of the exchange
 * @property {string} facebook - the facebook url of the exchange
 * @property {string} reddit - the reddit url of the exchange
 * @property {string} slack - the slack url of the exchange
 * @property {string} otherOne - the otherOne url of the exchange
 * @property {string} otherTwo - the otherTwo url of the exchange
 */
function ExchangeInfo({
  infoTitle, infoDesc, twitter, telegram, facebook, reddit, slack, otherOne, otherTwo,
}) {
  return (
    <div className="exchange_info_box break-words border-2 border-solid border-slate-300 p-3.5">
      <p className="exchange_info_title text-sm text-gray-400 mb-1.5">{infoTitle}</p>
      {infoDesc || null}
      {/* This is Twitter link */}
      {twitter ? (
        <ExchangeLink
          svg={<FaTwitter />}
          link={twitter}
        />
      ) : null}
      {/* This is Telegram link */}
      {telegram ? (
        <ExchangeLink
          svg={<FaTelegram />}
          link={telegram}
        />
      ) : null}
      {/* This is Facebook link */}
      {facebook ? (
        <ExchangeLink
          svg={<FaFacebook />}
          link={facebook}
        />
      ) : null}
      {/* This is Reddit link */}
      {reddit ? (
        <ExchangeLink
          svg={<FaReddit />}
          link={reddit}
        />
      ) : null}
      {/* This is Slack link */}
      {slack ? (
        <ExchangeLink
          svg={<FaSlack />}
          link={slack}
        />
      ) : null}
      {/* This is the other_1 url link */}
      {otherOne ? (
        <ExchangeLink
          svg={<FaLink />}
          link={otherOne}
        />
      ) : null}
      {/* This is the other_2 url link */}
      {otherTwo ? (
        <ExchangeLink
          svg={<FaLink />}
          link={otherTwo}
        />
      ) : null}
    </div>
  );
}

export default ExchangeInfo;
