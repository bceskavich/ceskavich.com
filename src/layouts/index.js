import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SiteHead from '../components/SiteMeta';
import { baseColor, accentColor } from '../constants/styles';

import 'normalize.css';

const AppContainer = styled.div`
  font-family: 'Source Sans Pro', 'Museo Sans', Arial, 'Lucida Grande',
    sans-serif;
  max-width: 1024px;
  margin: 75px auto 0px auto;
  color: ${baseColor};
  @media screen and (max-width: 1099px) {
    padding: 0px 25px;
  }
  a {
    color: ${accentColor};
    &:visited {
      color: ${accentColor};
    }
  }
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
