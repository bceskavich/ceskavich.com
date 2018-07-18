import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SiteMeta = ({ title }) => (
  <Helmet
    title={title}
    meta={[
      { name: 'robots', content: 'index,follow' },
      {
        name: 'description',
        content: 'Hey, my name is Billy, and I write software for the web.'
      },

      // Open Graph
      { name: 'og:title', content: 'Billy Ceskavich' },
      { name: 'og:site_name', content: 'Billy Ceskavich' },
      {
        name: 'og:description',
        content: 'I write software for the web.'
      },
      {
        name: 'og:image',
        content:
          'https://pbs.twimg.com/profile_images/1019431154242412544/pVFRoNBa_400x400.jpg'
      },
      { name: 'og:url', content: 'http://www.ceskavich.com' },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Billy Ceskavich' },
      { name: 'twitter:creator', content: '@ceskavich' },
      {
        name: 'twitter:description',
        content: 'I write software for the web.'
      },
      {
        name: 'twitter:image',
        content:
          'https://pbs.twimg.com/profile_images/1019431154242412544/pVFRoNBa_400x400.jpg'
      }
    ]}
  />
);

SiteMeta.propTypes = {
  title: PropTypes.string
};

export default SiteMeta;
