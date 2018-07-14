import React from 'react';
import PropTypes from 'prop-types';
import SiteHead from '../components/SiteMeta';

import 'normalize.css';

const Layout = ({ children, data }) => (
  <div>
    <SiteHead title={data.site.siteMetadata.title} />
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
