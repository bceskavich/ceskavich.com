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
    let { company, title, location, date, bullets } = this.props;

    return (
      <div>
        {this.renderTitle()}
        <When>
          {location} / {date}
        </When>
        <DetailsList>
          {bullets.map((bullet, index) => (
            <li key={index}>
              <Markdown source={bullet} />
            </li>
          ))}
        </DetailsList>
      </div>
    );
  }

  renderTitle() {
    let { company, title } = this.props;
    if (company) {
      return (
        <Title>
          <Markdown source={`${company} / ${title}`} />
        </Title>
      );
    } else {
      return (
        <Title>
          {title
            .split('\n')
            .map((titleItem, index) => <div key={index}>{titleItem}</div>)}
        </Title>
      );
    }
  }
}
