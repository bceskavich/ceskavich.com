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
        content: "Hey, my name is Billy. I'm a software engineer at Vox Media."
      },

      // Open Graph
      { name: 'og:title', content: 'Billy Ceskavich' },
      { name: 'og:site_name', content: 'Billy Ceskavich' },
      {
        name: 'og:description',
        content: 'Software engineer at Vox Media. Baker. Cozy sock haver.'
      },
      // {
      //   name: 'og:image',
      //   content:
      //     'https://pbs.twimg.com/profile_images/539474205746540544/xRLvHKUl_400x400.jpeg'
      // },
      { name: 'og:url', content: 'http://www.ceskavich.com' },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Billy Ceskavich' },
      { name: 'twitter:creator', content: '@ceskavich' },
      {
        name: 'twitter:description',
        content: 'Software engineer at Vox Media. Baker. Cozy sock haver.'
      }
      // {
      //   name: 'twitter:image',
      //   content:
      //     'https://pbs.twimg.com/profile_images/539474205746540544/xRLvHKUl_400x400.jpeg'
      // }
    ]}
  />
);

SiteMeta.propTypes = {
  title: PropTypes.string
};

export default SiteMeta;
