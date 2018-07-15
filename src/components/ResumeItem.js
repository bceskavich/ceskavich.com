import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from './Markdown';

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
        <h3>
          {location} / {date}
        </h3>
        <ul>
          {bullets.map((bullet, index) => (
            <li key={index}>
              <Markdown source={bullet} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderTitle() {
    let { company, title } = this.props;
    if (company) {
      return (
        <h2>
          <Markdown source={`${company} / ${title}`} />
        </h2>
      );
    } else {
      return (
        <h2>
          {title
            .split('\n')
            .map((titleItem, index) => <div key={index}>{titleItem}</div>)}
        </h2>
      );
    }
  }
}
