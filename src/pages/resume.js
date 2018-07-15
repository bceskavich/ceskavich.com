import React from 'react';
import Link from 'gatsby-link';
import ResumeSection from '../components/ResumeSection';

export default ({ data }) => {
  return (
    <div>
      <div>
        <Link to="/">&larr; Home</Link>
      </div>
      <ResumeSection content={data.site.siteMetadata.resume.education} />
      <ResumeSection content={data.site.siteMetadata.resume.experience} />
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
