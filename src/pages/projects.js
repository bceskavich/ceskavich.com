import React from 'react';
import styled from 'styled-components';
import HomeLink from '../components/HomeLink';
import { DynamicHeader } from '../constants/styles';
import Markdown from '../components/Markdown';

const ProjectsContainer = styled.div`
  max-width: 600px;
`;

const Title = DynamicHeader.extend``;

const DetailsChunk = styled.div`
  line-height: 1.5;
  max-width: 600px;
  margin: 40px 0px;
`;

const ProjectsList = styled.ul`
  line-height: 1.25;
  padding-left: 20px;
  li {
    margin-bottom: 30px;
  }
`;

export default ({ data }) => (
  <ProjectsContainer>
    <HomeLink />
    <DynamicHeader maxSize="40" minSize="25">
      Projects
    </DynamicHeader>
    <DetailsChunk>
      These days, I work on side projects sporadically at best. Here are some
      recent things, some of which are still in the works:
    </DetailsChunk>
    <ProjectsList>
      {data.site.siteMetadata.projects.recent.map((str, index) => (
        <li key={index}>
          <Markdown source={str} />
        </li>
      ))}
    </ProjectsList>
    <DetailsChunk>
      Back when I was a student, I worked on side projects more frequently. I
      had the time. And, I wanted to learn so many things. Some highlights from
      the distant years of 2015 and earlier:
    </DetailsChunk>
    <ProjectsList>
      {data.site.siteMetadata.projects.old.map((str, index) => (
        <li key={index}>
          <Markdown source={str} />
        </li>
      ))}
    </ProjectsList>
  </ProjectsContainer>
);

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        projects {
          recent
          old
        }
      }
    }
  }
`;
