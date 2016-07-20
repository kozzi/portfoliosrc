import React, { PropTypes } from 'react';
import Link from '../../components/Link';
import s from './WorkItem.css';
import defaultImage from '../../static/images/rainier.jpg';

const WorkItem = (props) =>
  <section className={s.workItem}>
    <Link to={props.projectPath}>
      <img src={props.heroImagePath} alt="Project thumbnail" />
      <div className={s.blurb}>
        {props.children}
      </div>
    </Link>
  </section>
;

WorkItem.propTypes = {
  projectPath: PropTypes.string.isRequired,
  heroImagePath: PropTypes.string.isRequired,
  children: PropTypes.node,
};

WorkItem.defaultProps = {
  projectPath: '/work',
  heroImagePath: defaultImage,
};

export default WorkItem;
