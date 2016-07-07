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
import s from './styles.css';
import { html } from './index.md';
import profileImage from '../../static/images/profile2.jpg';
import rainierImage from '../../static/images/rainier-ladder.jpg';
import stpImage from '../../static/images/stp.jpg';

const AboutPage = () =>
  <Layout>
    <h1>Who's Charing?</h1>
    <img src={rainierImage} alt="Climbing Mt Rainier" className={s.profileImage} />
    <img src={profileImage} alt="Charing" className={s.profileImage} />
    <img src={stpImage} alt="Riding the Seattle-to-Portland route" className={s.profileImage} />
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
;

export default AboutPage;
