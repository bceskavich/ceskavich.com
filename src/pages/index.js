import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { accentColor } from '../constants/styles';
import Markdown from '../components/Markdown';

const Title = styled.h1`
  font-size: 50px;
`;

const Name = styled.span`
  border-bottom: 6px solid ${accentColor};
`;

const AboutChunk = styled.div`
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 25px;
`;

const LinksList = styled.ul`
  padding-left: 0;
  li {
    margin-bottom: 5px;
  }
`;

export default ({ data }) => (
  <div>
    <Title>
      Hey, it's <Name>Billy!</Name>
    </Title>
    {data.site.siteMetadata.intro.map((item, index) => (
      <AboutChunk>
        <Markdown key={index} source={item} />
      </AboutChunk>
    ))}
    <AboutChunk>
      You can head to my <Link to="/projects">projects page</Link> to see some
      highlights of my work. Or, check out my <Link to="/resume">resume</Link>{' '}
      for a more formal, detailed review of my experience.
    </AboutChunk>
    <AboutChunk>
      My email is{' '}
      <em>
        bceskavich <strong>[at]</strong> gmail <strong>[dot]</strong> com
      </em>
    </AboutChunk>
    <AboutChunk>Find me online at:</AboutChunk>
    <LinksList>
      <li>
        <a href="https://github.com/bceskavich">GitHub</a>
      </li>
      <li>
        <a href="https://www.instagram.com/ceskavich/">Instagram</a>
      </li>
      <li>
        <a href="https://twitter.com/ceskavich">Twitter</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ceskavich/">LinkedIn</a>
      </li>
    </LinksList>
  </div>
);

export const query = graphql`
  query IntroQuery {
    site {
      siteMetadata {
        intro
      }
    }
  }
`;
