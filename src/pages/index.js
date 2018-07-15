import React from 'react';
import styled from 'styled-components';
import { accentColor } from '../constants/styles';

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

export default () => (
  <div>
    <Title>
      Hey, it's <Name>Billy!</Name>
    </Title>
    <AboutChunk>
      I am a full-stack engineer at{' '}
      <a href="https://product.voxmedia.com/pages/our-team">Vox Media</a>. For
      over 2 years, I've worked on all parts of our proprietary CMS. Some key
      contributions include: a large chunk of user-facing features in our
      editor, which I helped rewrite; our content search infrastructure; user
      authentication and authorization systems.
    </AboutChunk>
    <AboutChunk>
      Previously, I worked as a research assistant at{' '}
      <a href="http://bits.ischool.syr.edu/">BITS Lab</a> at the Syracuse
      University <a href="https://ischool.syr.edu/">iSchool</a> for 1.5 years,
      where I wrote software to collect and analyze social media data. I've also
      held internships at <a href="http://www.madebymany.com/">Made by Many</a>,{' '}
      <a href="https://twitter.com/">Twitter</a>, and{' '}
      <a href="https://evernote.com/">Evernote</a>.
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
    </LinksList>
  </div>
);
