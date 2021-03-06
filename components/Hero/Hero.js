import React from 'react';
import Header from '../Header';
import Heart from '../Heart';
import HeroCaption from './HeroCaption';
import s from './Hero.css';
import heroImage from './hero-30.jpg';

const Hero = (props) => {
  // For some reason, background images only work if I set them
  // inline. Setting this in the stylesheet (./Hero.css) didn't work
  let heroBackgroundInlineCSS = {
    backgroundImage: `url('${heroImage}')`,
  };

  return (
    <div id="heroContainer" className={s.heroContainer}>
      <div className={s.hero} style={heroBackgroundInlineCSS}>
        <Header {...props} />
        <HeroCaption />
        <h1>Charing</h1>

        <div className={s.tagline}>
          <p>I design & code. I climb mountains for fun.</p>
          <p>Hello from Toronto Canada, eh <Heart /></p>
        </div>
      </div>
    </div>
    );
};

export default Hero;
