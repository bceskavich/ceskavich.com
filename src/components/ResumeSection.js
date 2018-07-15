import React from 'react';
import ResumeItem from './ResumeItem';

export default ({ content }) => (
  <div>
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
