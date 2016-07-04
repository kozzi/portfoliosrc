import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import '../../static/styles/base.css';
import s from './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <Header useLightFill={false} />
        <MainContent>
          {this.props.children}
        </MainContent>
        <Footer />
      </div>
    );
  }
}

export default Layout;
