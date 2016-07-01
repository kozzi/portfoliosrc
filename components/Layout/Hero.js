import React from 'react';
import s from './Hero.css';

class Hero extends React.Component {
  render() {
    return (
      <div className={s.hero}>

        <h1>Charing</h1>

        <div className={s.tagline}>
          <p>I design & code stuff. I climb mountains for fun.</p>
          <p>Hello from Toronto Canada, eh &hearts;</p>
        </div>
      </div>
    );
  }
}

export default Hero;

        // OLD SVG CODE 
        // <svg version="1.1" className={s.svgContainer} width="100%" height="auto"
        // preserveAspectRatio="none" viewBox="0 0 1280 400"
        //   xmlns="http://www.w3.org/2000/svg">
        //   <defs>
        //     <mask id="mask">
        //       <g>  
        //         <rect x="0" y="0" className={s.maskRect} />
        //         <text x="50%" y="100" className={s.maskText}>CHARING</text>
        //       </g>
        //     </mask>
        //   </defs>
        //   <rect x="0" y="0" className={s.rect} />
        // </svg>
