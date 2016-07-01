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
import Header from './Header';
import Hero from './Hero';
import HeroCaption from './HeroCaption';
import MainContent from './MainContent';
import '../../static/styles/base.css';
import s from './IndexLayout.css';
import heroImage from './hero-30.jpg';

class IndexLayout extends React.Component {
  render() {
    // For some reason, background images only work if I set them 
    // inline. Setting this in the stylesheet (./Hero.css) didn't work
    let heroBackgroundInlineCSS = {
      backgroundImage: "url(" + heroImage + ")"
    };

    return (
      <div className={s.container} style={heroBackgroundInlineCSS}>
        <Header />
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
