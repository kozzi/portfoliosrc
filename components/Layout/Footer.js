import React from 'react';
import Link from '../Link';
import s from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={s.container}>
        <div className={s.content}>
          <ul className={s.socialLinks}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;