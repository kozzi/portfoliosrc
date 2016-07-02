import React from 'react';
import Link from '../Link';
import s from './Logo.css';
import logo from './logo.svg';

class Logo extends React.Component {
  render() {
    return (
      <div className={s.logo}>
        <Link to="/"><img src={logo} alt="Home"/></Link>
      </div>
    );
  }
}

Logo.propTypes = {
  visible: React.PropTypes.bool.isRequired
};
Logo.defaultProps = {
  visible: false
};

export default Logo;
