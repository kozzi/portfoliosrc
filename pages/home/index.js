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
import IndexLayout from '../../components/Layout/IndexLayout';
import Link from '../../components/Link';
import hint from 'hint.css/hint.css';
import s from './styles.css';
import webDev from '../../static/images/web.png';
import productDesign from '../../static/images/product.svg';
import illustration from '../../static/images/illustration.svg';

const HomePage = () =>
  <IndexLayout>
    <section>
      <h1>About Me</h1>
      <p>Hi, I'm Charing!
        <span
          className={`${s.asterisk} ${hint['hint--right']} ${hint['hint--rounded']}`}
          aria-label="Psst! It rhymes with 'bling'!"
        >
          *
        </span>
      </p>

      <p>
      I design user experiences, and I make them real with code.
      I love the entire process of creation. I am at my happiest when
      I am surrounded by really smart people and learning something new.
      </p>

      <p>Previously, I was product manager at <a href="http://microsoft.com">Microsoft</a>, and engineering contributor at <a href="http://code.org">Code.org</a></p>

      <p><Link to="/about" className={s.more}>More about me &#8594;</Link></p>
    </section>

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


  </IndexLayout>
;

export default HomePage;
