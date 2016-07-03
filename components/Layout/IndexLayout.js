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
import Header from './Header';
import Hero from './Hero';
import HeroCaption from './HeroCaption';
import MainContent from './MainContent';
import '../../static/styles/base.css';
import s from './IndexLayout.css';
import heroImage from './hero-30.jpg';


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
      .addTo(this.scrollMagicController)
      .on("enter", this.handleScrollDown.bind(this))
      .on("leave", this.handleScrollUp.bind(this));
  }
  componentWillUnmount() {
    this.scrollMagicController.destroy();
  }
  handleScrollDown() {
    this.setState({pageScrolledDown: true});
  }
  handleScrollUp() {
    this.setState({pageScrolledDown: false});
  }
  render() {
    // For some reason, background images only work if I set them 
    // inline. Setting this in the stylesheet (./Hero.css) didn't work
    let heroBackgroundInlineCSS = {
      backgroundImage: "url(" + heroImage + ")"
    };

    return (
      <div className={s.container} style={heroBackgroundInlineCSS}>
        <Header pageScrolledDown={this.state.pageScrolledDown} />
        <Hero />
        <HeroCaption />
        <MainContent>
          {this.props.children}
        </MainContent>
      </div>
    );
  }
}

export default IndexLayout;
