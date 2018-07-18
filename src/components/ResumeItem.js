import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Markdown from './Markdown';
import { DynamicHeader } from '../constants/styles';

const Title = DynamicHeader.withComponent('h2').extend`
  font-weight: 600;
  margin-bottom: 0px;
`;

const When = DynamicHeader.withComponent('h3').extend`
  margin-top: 10px;
  font-style: italic;
  font-weight: 400;
  margin-top: 5px;
`;

const DetailsList = styled.ul`
  margin-bottom: 25px;
  padding-left: 20px;
  li {
    line-height: 1.5;
  }
`;

export default class ResumeItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    bullets: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    return (
      <div>
        <Title maxSize="22" minSize="16">
          {this.renderTitleContent()}
        </Title>
        {this.renderWhen()}
        {this.renderBullets()}
      </div>
    );
  }

  renderTitleContent() {
    let { type, company, title } = this.props;
    if (type === 'Experience') {
      return <Markdown source={`${company} / ${title}`} />;
    } else if (type === 'Education') {
      return title
        .split('\n')
        .map((titleItem, index) => <div key={index}>{titleItem}</div>);
    }
    return title;
  }

  renderWhen() {
    let { type, location, date } = this.props;
    if (type === 'Skills') {
      return null;
    }
    return (
      <When maxSize="18" minSize="16">
        {location} / {date}
      </When>
    );
  }

  renderBullets() {
    let { bullets } = this.props;
    if (!bullets) {
      return null;
    }

    return (
      <DetailsList>
        {bullets.map((bullet, index) => (
          <li key={index}>
            <Markdown source={bullet} />
          </li>
        ))}
      </DetailsList>
    );
  }
}
