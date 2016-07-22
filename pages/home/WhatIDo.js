import React from 'react';
import s from './WhatIDo.css';
import webDev from '../../static/images/web.png';
import productDesign from '../../static/images/product.svg';
import illustration from '../../static/images/illustration.png';

const WhatIDo = () =>
  <section className={s.whatIDo}>
    <h1>What I do</h1>
    <div className={s.whatIDoItem}>
      <img src={webDev} alt="Web Development" />
      <h2>Web Development</h2>
      <p>I have more than a decade of experience working with HTML, CSS and JavaScript. I am comfortable with frameworks/libraries like React, jQuery, CSS modules, and Webpack, and have experience writing unit, integration and UI tests for the web.</p>
    </div>
    <div className={s.whatIDoItem}>
      <img src={productDesign} alt="Product Design" />
      <h2>Product Design</h2>
      <p>Product design isn't just about pretty visuals (though it helps!). I believe in solving problems for our users. Through user testing and rapid iteration, I design how users interact and use a product.</p>
    </div>
    <div className={s.whatIDoItem}>
      <img src={illustration} alt="Illustration" />
      <h2>Illustration</h2>
      <p>Illustrations can be a very effective way of communicating (think how much more an inforgraphic can tell you over a paragraph of text). I am thoughtful and deliberate in what I draw so that illustrations in the product can be useful and delightful to users!</p>
    </div>
  </section>
;

export default WhatIDo;
