import React from 'react';
import Link from '../Link';
import s from './HeroCaption.css';

class HeroCaption extends React.Component {
  render() {
    return (
      <div className={s.caption}>
        <a href="https://en.wikipedia.org/wiki/Mount_Rainier" target="_blank">
          &#9650; <br/>
          Mount Rainier<br/>
          14,410ft<br />
          July 5th, 2015
        </a>
      </div>
    );
  }
}

export default HeroCaption;
