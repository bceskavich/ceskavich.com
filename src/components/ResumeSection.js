import React from 'react';
import styled from 'styled-components';
import ResumeItem from './ResumeItem';
import { accentColor, DynamicHeader } from '../constants/styles';

const SectionTitle = DynamicHeader.extend`
  border-bottom: 2px solid ${accentColor};
  padding-bottom: 10px;
`;

export default ({ sectionTitle, content }) => (
  <div className={sectionTitle.toLowerCase()}>
    <SectionTitle maxSize="30" minSize="20">
      {sectionTitle}
    </SectionTitle>
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
