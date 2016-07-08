import React, { PropTypes } from 'react';
import s from './WorkItem.css';

const WorkItem = (props) =>
  <section className={s.hello}>
    {props.children}
  </section>
;

WorkItem.propTypes = {
  children: PropTypes.node,
};

export default WorkItem;
