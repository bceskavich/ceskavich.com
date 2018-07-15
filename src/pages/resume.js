import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ResumeSection from '../components/ResumeSection';

const ResumeContentContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 25px;
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 25px;
  }
`;

export default ({ data }) => {
  return (
    <div>
      <div>
        <Link to="/">&larr; Home</Link>
      </div>
      <ResumeContentContainer>
        <ResumeSection
          sectionTitle="Education"
          content={data.site.siteMetadata.resume.education}
        />
        <ResumeSection
          sectionTitle="Experience"
          content={data.site.siteMetadata.resume.experience}
        />
      </ResumeContentContainer>
    </div>
  );
};

export const query = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        resume {
          education {
            title
            location
            date
            bullets
          }
          experience {
            company
            title
            location
            date
            bullets
          }
        }
      }
    }
  }
`;
