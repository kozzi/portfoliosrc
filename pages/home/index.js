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
import { html } from './index.md';

class HomePage extends React.Component {
  render() {
    return (
      <IndexLayout>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </IndexLayout>
    );
  }
}

export default HomePage;
