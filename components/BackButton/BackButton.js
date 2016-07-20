import React, { PropTypes } from 'react';
import history from '../../core/history';

class BackButton extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '&#8592; Go back',
  };

  goBack = event => {
    event.preventDefault();
    history.goBack();
  };

  render() {
    return (
      <div {...this.props}>
        <a href="/" onClick={this.goBack}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default BackButton;
