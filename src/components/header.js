import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.h1`
  color: steelblue;
  font-style: bold;
`

export default ({ siteTitle }) => (
  <div>
    <Header>
      <Link to="/">{siteTitle}</Link>
    </Header>
  </div>
)
