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
import IndexLayout from '../../components/IndexLayout';
import AboutMe from './AboutMe';
import FeaturedWork from './FeaturedWork';
import WhatIDo from './WhatIDo';
import Tools from './Tools';

const HomePage = (props) =>
  <IndexLayout {...props}>
    <AboutMe />
    <FeaturedWork />
    <WhatIDo />
    <Tools />
  </IndexLayout>
;

export default HomePage;
