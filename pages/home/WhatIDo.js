import React from 'react';
import s from './WhatIDo.css';
import webDev from '../../static/images/web.png';
import productDesign from '../../static/images/product.svg';
import illustration from '../../static/images/illustration.svg';

const WhatIDo = () =>
  <section className={s.whatIDo}>
    <h1>What I do</h1>
    <div className={s.whatIDoItem}>
      <img src={webDev} alt="Web Development" />
      <h2>Web Development</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quaerat quis expedita id minus, doloremque molestias quasi
        at est nam vel fugiat debitis iure! Accusantium velit, animi
        libero veniam repudiandae commodi.
      </p>
    </div>
    <div className={s.whatIDoItem}>
      <img src={productDesign} alt="Product Design" />
      <h2>Product Design</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quaerat quis expedita id minus, doloremque molestias quasi
        at est nam vel fugiat debitis iure! Accusantium velit, animi
        libero veniam repudiandae commodi.
      </p>
    </div>
    <div className={s.whatIDoItem}>
      <img src={illustration} alt="Illustration" />
      <h2>Illustration</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quaerat quis expedita id minus, doloremque molestias quasi
        at est nam vel fugiat debitis iure! Accusantium velit, animi
        libero veniam repudiandae commodi.
      </p>
    </div>
  </section>
;

export default WhatIDo;
