import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import '../../static/styles/base.css';
import s from './Layout.css';
import heroImage from './hero-30.jpg';

class Layout extends React.Component {
  render() {
    // For some reason, background images only work if I set them
    // inline. Setting this in the stylesheet (./Hero.css) didn't work
    let heroBackgroundInlineCSS = {
      backgroundImage: "url(" + heroImage + ")"
    };

    return (
      <div className={s.container} style={heroBackgroundInlineCSS}>
        <Header />
        <MainContent>
          {this.props.children}
        </MainContent>
      </div>
    );
  }
}

export default Layout;
