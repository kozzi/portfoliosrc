import React from 'react';
import Header from './Header';
import HeroCaption from './HeroCaption';
import s from './Hero.css';

class Hero extends React.Component {
  render() {
    return (
      <div id="heroContainer" className={s.heroContainer}>
        <div className={s.hero}>
          <Header {...this.props} />
          <HeroCaption />
          <h1>Charing</h1>

          <div className={s.tagline}>
            <p>I design & code. I climb mountains for fun.</p>
            <p>Hello from Toronto Canada, eh &hearts;</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
