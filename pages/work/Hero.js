import React, { PropTypes } from 'react';
import s from './Hero.css';

const Hero = (props) =>
  <div className={s.hero}>
    <img src={props.path} alt="{props.alt}" />
  </div>
;

Hero.propTypes = {
  path: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Hero;
