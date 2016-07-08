import React, { PropTypes } from 'react';
import EasyTransition from 'react-easy-transition';
import Header from '../Header';
import MainContent from '../MainContent';
import Footer from '../Footer';
import '../../static/styles/base.css';

class Layout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    route: PropTypes.object,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <EasyTransition
          path={this.props.route.path}
          initialStyle={{ opacity: 0 }}
          transition="opacity 0.3s ease-in"
          finalStyle={{ opacity: 1 }}
        >
          <Header useLightFill={false} />
          <MainContent>
            {this.props.children}
          </MainContent>
          <Footer />
        </EasyTransition>
      </div>
    );
  }

}

export default Layout;
