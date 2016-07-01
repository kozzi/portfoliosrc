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
import Link from '../Link';
import s from './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={s.nav}>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }

}

export default Navigation;
