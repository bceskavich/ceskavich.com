import React from 'react';
import styled from 'styled-components';
import ResumeItem from './ResumeItem';
import { accentColor } from '../constants/styles';

const SectionTitle = styled.h1`
  font-size: 30px;
  border-bottom: 2px solid ${accentColor};
  padding-bottom: 10px;
`;

export default ({ sectionTitle, content }) => (
  <div className={sectionTitle.toLowerCase()}>
    <SectionTitle>{sectionTitle}</SectionTitle>
    {content.map(({ company, title, location, date, bullets }, index) => (
      <ResumeItem
        key={index}
        type={sectionTitle}
        company={company}
        title={title}
        location={location}
        date={date}
        bullets={bullets}
      />
    ))}
  </div>
);
