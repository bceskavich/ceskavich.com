import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { accentColor, DynamicHeader } from '../constants/styles';
import Markdown from '../components/Markdown';

const Title = DynamicHeader.extend`
  margin-bottom: 50px;
`;

const TitleText = styled.span`
  border-bottom: 6px solid ${accentColor};
`;

const AboutChunk = styled.div`
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 25px;
`;

const LinksList = styled.ul`
  padding-left: 20px;
  li {
    margin-bottom: 5px;
  }
`;

export default () => (
  <div>
    <Title maxSize="50" minSize="30">
      <TitleText>Billy Ceskavich</TitleText>
    </Title>
    <AboutChunk>
      I write software for the web. I currently work for{' '}
      <a href="https://product.voxmedia.com/pages/our-team">Vox Media</a> as a
      full-stack engineer contributing to our publishing platform{' '}
      <a href="https://getchorus.voxmedia.com/">Chorus</a>.
    </AboutChunk>
    <AboutChunk>
      Previously, I was in school. Specifically, from 2010 – 2015 at the
      Syracuse University <a href="https://ischool.syr.edu/">iSchool</a>. During
      that time, I held engineering and product internships at{' '}
      <a href="http://www.madebymany.com/">Made by Many</a>,{' '}
      <a href="https://twitter.com/">Twitter</a>, and{' '}
      <a href="https://evernote.com/">Evernote</a>.
    </AboutChunk>
    <AboutChunk>
      You can look through a list of my current and past{' '}
      <Link to="/projects">projects</Link>, which I update occasionally. You can
      also read over my <Link to="/resume">resume</Link>.
    </AboutChunk>
    <AboutChunk>
      My email is{' '}
      <em>
        bceskavich <strong>[at]</strong> gmail <strong>[dot]</strong> com
      </em>
    </AboutChunk>
    <AboutChunk>
      My last name is pronounced <em>SES</em>-kuh-vitch
    </AboutChunk>
    <AboutChunk>You can find me on your favorite websites:</AboutChunk>
    <LinksList>
      <li>
        <a href="https://twitter.com/ceskavich">Twitter</a>
      </li>
      <li>
        <a href="https://www.instagram.com/ceskavich/">Instagram</a>
      </li>
      <li>
        <a href="https://github.com/bceskavich">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ceskavich/">LinkedIn</a>
      </li>
    </LinksList>
  </div>
);
