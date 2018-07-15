import React from 'react';
import styled from 'styled-components';
import HomeLink from '../components/HomeLink';

const ProjectsContainer = styled.div`
  max-width: 600px;
`;

const DetailsChunk = styled.div`
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 25px;
`;

const ProjectsList = styled.ul`
  padding-left: 0;
  margin-bottom: 25px;
  li {
    margin-bottom: 5px;
  }
`;

export default () => (
  <ProjectsContainer>
    <HomeLink />
    <h1>Projects</h1>
    <DetailsChunk>
      Most of my recent work has been done for my current employer, Vox Media.
      I've sporadically worked on some things to say in touch etc. These
      include:
    </DetailsChunk>
    <ProjectsList>
      <li>
        I've been working through V2 of the Rust book. I'm looking to learn
        image processing things.
      </li>
      <li>Shitty Bot is a thing too</li>
      <li>Some stuff with Elm, it didn't really take</li>
      <li>Elixir things. Wrote an app for our company's hackathon.</li>
    </ProjectsList>
    <DetailsChunk>
      Before this job when I was a student I did more side-project work. I had
      free time and was actively learning. Also, internship projects. These
      include:
    </DetailsChunk>
    <ProjectsList>
      <li>U Don't Know Me!</li>
      <li>HelloBacker</li>
      <li>STACKS</li>
      <li>Drought in America</li>
      <li>Hack Upstate</li>
    </ProjectsList>
  </ProjectsContainer>
);
