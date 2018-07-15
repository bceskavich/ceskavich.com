import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Markdown from './Markdown';

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 0px;
`;

const When = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  font-style: italic;
  font-weight: 400;
`;

const DetailsList = styled.ul`
  margin-bottom: 25px;
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
        {this.renderTitle()}
        {this.renderWhen()}
        <DetailsList>
          {this.props.bullets.map((bullet, index) => (
            <li key={index}>
              <Markdown source={bullet} />
            </li>
          ))}
        </DetailsList>
      </div>
    );
  }

  renderTitle() {
    let { type, company, title } = this.props;
    if (type === 'Experience') {
      return (
        <Title>
          <Markdown source={`${company} / ${title}`} />
        </Title>
      );
    } else if (type === 'Education') {
      return (
        <Title>
          {title
            .split('\n')
            .map((titleItem, index) => <div key={index}>{titleItem}</div>)}
        </Title>
      );
    }
    return <Title>{title}</Title>;
  }

  renderWhen() {
    let { type, location, date } = this.props;
    if (type === 'Skills') {
      return null;
    }
    return (
      <When>
        {location} / {date}
      </When>
    );
  }
}
