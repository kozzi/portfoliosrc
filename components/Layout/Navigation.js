/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import hover from 'hover.css/css/hover.css';
import Link from '../Link';
import s from './Navigation.css';

class Navigation extends React.Component {
  static propTypes = {
    useLightFill: React.PropTypes.bool.isRequired
  };

  static defaultProps = {
    useLightFill: true
  };

  render() {
    let fillClass = this.props.useLightFill ? s.light : s.dark;

    let linkClass = [
      fillClass,
      hover['hvr-underline-from-center']
      ].join(" ");

    return (
      <nav className={s.nav}>
        <ul>
          <li><Link to="/about" className={linkClass}>About</Link></li>
          <li><Link to="/work" className={linkClass}>Work</Link></li>
          <li><Link to="/Contact" className={linkClass}>Contact</Link></li>
        </ul>
      </nav>
    );
  }

}

export default Navigation;
