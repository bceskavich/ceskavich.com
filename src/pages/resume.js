import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ResumeSection from '../components/ResumeSection';
import HomeLink from '../components/HomeLink';
import pdf from '../files/BillyCeskavich.pdf';
import { DynamicHeader } from '../constants/styles';

const ResumeContentContainer = styled.div`
  margin-bottom: 25px;
  @media screen and (min-width: 710px) {
    display: grid;
  }
  @media screen and (min-width: 710px) and (max-width: 850px) {
    grid-template-columns: 48% 4% 48%;
    .skills {
      grid-column: 3;
    }
    .experience {
      grid-column: 1 / span 3;
    }
  }
  @media screen and (min-width: 851px) {
    grid-template-columns: 38% 4% 58%;
    grid-template-rows: 1fr 5fr;
    .skills {
      grid-row: 2;
    }
    .experience {
      grid-row: 1 / span 2;
      grid-column: 3;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = DynamicHeader.extend``;

export default ({ data }) => {
  return (
    <div>
      <LinksContainer>
        <HomeLink />
        <div>
          <a href={pdf} target="_blank">
            Download
          </a>
        </div>
      </LinksContainer>
      <Name maxSize="40" minSize="25">
        Billy Ceskavich
      </Name>
      <ResumeContentContainer>
        <ResumeSection
          sectionTitle="Education"
          content={data.site.siteMetadata.resume.education}
        />
        <ResumeSection
          sectionTitle="Skills"
          content={data.site.siteMetadata.resume.skills}
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
          skills {
            title
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
