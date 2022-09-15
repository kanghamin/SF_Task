import React from 'react';
import {
  FaTwitter, FaTelegram, FaFacebook, FaReddit, FaSlack, FaLink,
} from 'react-icons/fa';
import ExchangeLink from './ExchangeLink';

function ExchangeInfo({
  infoTitle, infoDesc, twitter, telegram, facebook, reddit, slack, otherOne, otherTwo,
}) {
  return (
    <div className="break-words border-2 border-solid border-slate-300 p-3.5">
      <p className="text-sm text-gray-400 mb-1.5">{infoTitle}</p>
      {infoDesc || null}

      {twitter ? (
        <ExchangeLink
          svg={<FaTwitter />}
          link={twitter}
        />
      ) : null}

      {telegram ? (
        <ExchangeLink
          svg={<FaTelegram />}
          link={telegram}
        />
      ) : null}

      {facebook ? (
        <ExchangeLink
          svg={<FaFacebook />}
          link={facebook}
        />
      ) : null}

      {reddit ? (
        <ExchangeLink
          svg={<FaReddit />}
          link={reddit}
        />
      ) : null}

      {slack ? (
        <ExchangeLink
          svg={<FaSlack />}
          link={slack}
        />
      ) : null}

      {otherOne ? (
        <ExchangeLink
          svg={<FaLink />}
          link={otherOne}
        />
      ) : null}

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
