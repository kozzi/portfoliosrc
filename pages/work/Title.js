import React, { PropTypes } from 'react';
import s from './Title.css';

const Title = (props) =>
  <div className={s.title}>
    <h1>{props.children}</h1>
  </div>
;

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
