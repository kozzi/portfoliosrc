import React, { PropTypes } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import '../../static/styles/base.css';

const Layout = (props) =>
  <div>
    <Header useLightFill={false} />
    <MainContent>
      {props.children}
    </MainContent>
    <Footer />
  </div>
;

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
