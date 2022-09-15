import React from 'react';

/**
 * This is the title of the page
 *
 * @property {string} title - the title of the page
 */
function Title({ title }) {
  return <div className="text-4xl mb-12 max-w-xs md:max-w-2xl">{title}</div>;
}

export default Title;
