import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ source }) => (
  <ReactMarkdown
    source={source}
    renderers={{ root: 'span' }}
    disallowedTypes={['paragraph']}
    unwrapDisallowed
  />
);

Markdown.propTypes = {
  source: PropTypes.string
};

export default Markdown;
