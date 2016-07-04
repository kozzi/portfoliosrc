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
import Logo from './Logo';
import Navigation from './Navigation';
import s from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className={s.header}>
        <Logo {...this.props} />
        <Navigation />
      </header>
    );
  }
}

export default Header;
