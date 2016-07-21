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
import Link from '../../components/Link';
import AboutMe from './AboutMe';
import FeaturedWork from './FeaturedWork';
import WhatIDo from './WhatIDo';

const HomePage = (props) =>
  <IndexLayout {...props}>
    <AboutMe />
    <FeaturedWork />
    <WhatIDo />
    <h1>Get in touch!</h1>
    <p>I'd love to hear from you! Find out how you can reach me <Link to="/contact">here</Link>.</p>
  </IndexLayout>
;

export default HomePage;
