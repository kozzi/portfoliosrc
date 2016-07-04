import React from 'react';
import s from './MainContent.css';

const MainContent = (props) =>
  <main className={s.container}>
    <div className={s.content}>
      {props.children}
    </div>
  </main>
;

MainContent.propTypes = {
  children: React.PropTypes.node,
};

export default MainContent;
