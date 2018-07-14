import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SiteHead from '../components/SiteMeta';

import 'normalize.css';

const AppContainer = styled.div`
  font-family: 'Source Sans Pro', 'Museo Sans', Arial, 'Lucida Grande',
    sans-serif;
  max-width: 1024px;
  margin: 0px auto;
  padding: 0px 15px;
`;

const Layout = ({ children, data }) => (
  <AppContainer>
    <SiteHead title={data.site.siteMetadata.title} />
    {children()}
  </AppContainer>
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
