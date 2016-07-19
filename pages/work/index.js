import React from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import WorkItem from './WorkItem';

const WorkPage = (props) =>
  <Layout {...props}>
    <h1>Work</h1>
    <WorkItem>
      <p><Link to="/work/scandi">Scandi</Link></p>
    </WorkItem>
    <WorkItem>
      <p><Link to="/work/pawnda">Pawnda</Link></p>
    </WorkItem>
    <WorkItem>
      <p><Link to="/work/dewey">Dewey</Link></p>
    </WorkItem>
    <WorkItem>
      <p><Link to="/work/switching">Switching</Link></p>
    </WorkItem>
    <WorkItem>
      <p><Link to="/work/snapping">Snapping</Link></p>
    </WorkItem>
  </Layout>
;

export default WorkPage;
