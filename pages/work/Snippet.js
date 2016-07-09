import React, { PropTypes } from 'react';
import s from './Snippet.css';

const Snippet = (props) =>
  <div className={s.snippet}>
    {props.children}
  </div>
;

Snippet.propTypes = {
  children: PropTypes.node,
};

export default Snippet;
