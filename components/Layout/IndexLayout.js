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
import ScrollMagic from 'scrollmagic';
import Hero from './Hero';
import MainContent from './MainContent';
import '../../static/styles/base.css';
import s from './IndexLayout.css';

class IndexLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      pageScrolledDown: false
    };
    this.scrollMagicController = null;
  }
  componentDidMount() {
    this.scrollMagicController = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: "main", triggerHook: 0})
      .on("enter", this.handleScrollDown.bind(this))
      .on("leave", this.handleScrollUp.bind(this))
      .addTo(this.scrollMagicController);
  }
  componentWillUnmount() {
    this.scrollMagicController.destroy();
    this.scrollMagicController = null;
  }
  handleScrollDown() {
    this.setState({pageScrolledDown: true});
  }
  handleScrollUp() {
    this.setState({pageScrolledDown: false});
  }
  render() {
    return (
      <div className={s.container}>
        <Hero pageScrolledDown={this.state.pageScrolledDown} />
        <MainContent>
          {this.props.children}
        </MainContent>
      </div>
    );
  }
}

export default IndexLayout;
