import React from 'react';
import hover from 'hover.css/css/hover.css';
import Link from '../Link';
import s from './Logo.css';
import logo from './logo.svg';

class Logo extends React.Component {
  static propTypes = {
    useLightFill: React.PropTypes.bool.isRequired
  };

  static defaultProps = {
    useLightFill: true
  };

  render() {
    let fillClass = this.props.useLightFill ? s.fillLight : s.fillDark;

    return (
      <div className={s.logoContainer}>
        <Link to="/" className={hover['hvr-float-shadow']}>
          <svg version="1.1" x="0px" y="0px"
            viewBox="0 0 80 80">
            <g id="mountains">
              <path className={fillClass} d="M75,69.4L63.7,49.6L52.4,29.9c-1.2-2-4-2-5.2,0L35.9,49.6l-2.9,5l-6.2-10.8c-1.2-2-4-2-5.2,0l-7.3,12.7
                L6.9,69.4c-1.2,2,0.3,4.6,2.6,4.6h14.7h3h11.7h11h22.6C74.7,74,76.2,71.4,75,69.4z"/>
            </g>
            <g id="C">
              <path className={fillClass} d="M36.9,13.2l-4.8,5.7c-1.5-2.1-3.8-3.4-5.7-3.4c-3,0-5.2,2.4-5.2,5.8c0,3.4,2.2,5.8,5.2,5.8
                c1.8,0,4.1-1.1,5.7-2.9l4.8,5.1c-2.8,3.1-7.1,5-11,5c-7.7,0-13.4-5.5-13.4-13c0-7.4,5.8-12.8,13.7-12.8
                C30.1,8.6,34.3,10.4,36.9,13.2z"/>
            </g>
          </svg>
        </Link>
      </div>
    );
  }
}

export default Logo;
