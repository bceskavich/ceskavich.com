import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

export default () => (
  <Wrapper>
    <Link to="/">&larr; Home</Link>
  </Wrapper>
);
