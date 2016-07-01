import React from 'react';
import Link from '../Link';
import s from './Logo.css';

class Logo extends React.Component {
  render() {
    return (
      <div className={s.logo}>
        <Link to="/">&hearts;</Link>
      </div>
    );
  }
}

export default Logo;
