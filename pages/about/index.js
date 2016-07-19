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
import Layout from '../../components/Layout/Layout';
import QuickFacts from './QuickFacts';
import Heart from '../../components/Heart';
import s from './styles.css';
import { html } from './index.md';
import rainierImage from '../../static/images/rainier-ladder.jpg';
import stpImage from '../../static/images/stp.jpg';
import calligraphyImage from '../../static/images/calligraphy.jpg';

const AboutPage = (props) =>
  <Layout {...props}>
    <QuickFacts />
    <p className={s.intro}>
      I'm a designer, developer, and product manager,
      who recently moved to the beautiful city of Toronto.
      <Heart />
    </p>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <img src={rainierImage} alt="Climbing Mt Rainier" className={s.profileImage} />
    <img src={calligraphyImage} alt="Calligraphy" className={s.profileImage} />
    <img src={stpImage} alt="Riding the Seattle-to-Portland route" className={s.profileImage} />

  </Layout>
;

export default AboutPage;
