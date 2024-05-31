import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

const PagesMetaHead = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

PagesMetaHead.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

PagesMetaHead.defaultProps = {
  title: 'Next.js & TailwindCSS Portfolio Project',
  keywords: 'next.js, react, web, ui',
  description: 'Simple and multi-page next.js and react application',
};

export default PagesMetaHead;
