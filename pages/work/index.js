import React from 'react';
import Layout from '../../components/Layout';

const title = 'Work';

class WorkPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <h1>{title}</h1>
        <p>boop boop</p>
      </Layout>
    );
  }

}

export default WorkPage;
