import React from 'react';
import Heart from '../Heart';
import s from './Footer.css';

const Footer = () =>
  <footer className={s.container}>
    <div className={s.content}>
      <ul className={s.socialLinks}>
        <li>
          <a href="http://linkedin.com/in/charingwong" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="http://twitter.com/kozzi" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="http://github.com/kozzi" target="_blank">
            <i className="fa fa-github-alt" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="http://www.instagram.com/littlekozzi" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="http://kozzi.tumblr.com" target="_blank">
            <i className="fa fa-tumblr" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <p className={s.copyright}>
        Copyright &copy; 2016 Charing Wong. All rights reserved.
      </p>
      <p>
        Made with <Heart /> using <a href="http://facebook.github.io/react" target="_blank">React</a>, <a href="https://github.com/css-modules/css-modules" target="_blank">CSS Modules</a> and <a href="http://webpack.github.io" target="_blank">Webpack</a>, among other things. Hosted on <a href="http://pages.github.com">Github pages</a>.
      </p>
    </div>
  </footer>
;

export default Footer;
