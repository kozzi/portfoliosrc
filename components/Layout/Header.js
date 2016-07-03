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
    let fillLight = !this.props.pageScrolledDown;
    return (
      <header className={s.header}>
        <Logo fillLight={fillLight} />
        <Navigation />
      </header>
    );
  }
}

Header.propTypes = {
  pageScrolledDown: React.PropTypes.bool.isRequired
};
Header.defaultProps = {
  pageScrolledDown: false
};

export default Header;
