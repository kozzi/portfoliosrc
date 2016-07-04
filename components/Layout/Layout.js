import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import '../../static/styles/base.css';
import s from './Layout.css';

const Layout = (props) =>
  <div className={s.container}>
    <Header useLightFill={false} />
    <MainContent>
      {props.children}
    </MainContent>
    <Footer />
  </div>
;

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
