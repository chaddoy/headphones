import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function HeadTags({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700,800" rel="stylesheet" />
    </Head>
  )
}

HeadTags.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeadTags;
