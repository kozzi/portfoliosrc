/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import ScrollMagic from 'scrollmagic';
import EasyTransition from 'react-easy-transition';
import Hero from '../Hero';
import MainContent from '../MainContent';
import Footer from '../Footer';
import '../../static/styles/base.css';

class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    route: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      pageScrolledDown: false,
    };
    this.scrollMagicController = null;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.scrollMagicController = new ScrollMagic.Controller();

    new ScrollMagic.Scene({ triggerElement: 'main', triggerHook: 0 })
      .on('enter', this.handleScrollDown.bind(this))
      .on('leave', this.handleScrollUp.bind(this))
      .addTo(this.scrollMagicController);
  }
  componentWillUnmount() {
    this.scrollMagicController.destroy();
    this.scrollMagicController = null;
  }
  getUseLightFill() {
    return !this.state.pageScrolledDown;
  }
  handleScrollDown() {
    this.setState({ pageScrolledDown: true });
  }
  handleScrollUp() {
    this.setState({ pageScrolledDown: false });
  }
  render() {
    return (
      <div>
        <EasyTransition
          path={this.props.route.path}
          initialStyle={{ opacity: 0 }}
          transition="opacity 0.3s ease-in"
          finalStyle={{ opacity: 1 }}
        >
          <Hero useLightFill={this.getUseLightFill()} />
          <MainContent>
              {this.props.children}
          </MainContent>
          <Footer />
        </EasyTransition>
      </div>
    );
  }
}

export default IndexLayout;
