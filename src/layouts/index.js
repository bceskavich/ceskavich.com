import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/header'

const AppContainer = styled.div`
  font-family: Source-Sans Pro;
`

const Layout = ({ children, data }) => (
  <AppContainer>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
  </AppContainer>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
