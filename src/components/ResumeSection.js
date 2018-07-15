import React from 'react';
import styled from 'styled-components';
import ResumeItem from './ResumeItem';
import { accentColor } from '../constants/styles';

const ResumeSectionContainer = styled.div``;

const SectionTitle = styled.h1`
  font-size: 30px;
  border-bottom: 1px solid ${accentColor};
  padding-bottom: 10px;
`;

export default ({ sectionTitle, content }) => (
  <div>
    <SectionTitle>{sectionTitle}</SectionTitle>
    {content.map(({ company, title, location, date, bullets }, index) => (
      <ResumeItem
        key={index}
        company={company}
        title={title}
        location={location}
        date={date}
        bullets={bullets}
      />
    ))}
  </div>
);
