import React, { PropTypes } from 'react';
import Header from '../Header';
import MainContent from '../MainContent';
import Footer from '../Footer';
import '../../static/styles/base.css';

class Layout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
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
