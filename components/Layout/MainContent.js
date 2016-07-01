import React from 'react';
import s from './MainContent.css';

class MainContent extends React.Component {
  render() {
    return (
      <main className={s.container}>
        <div className={s.content}>
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default MainContent;
