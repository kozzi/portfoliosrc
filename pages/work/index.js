import React from 'react';
import Layout from '../../components/Layout';
import WorkItem from './WorkItem';

const WorkPage = (props) =>
  <Layout {...props}>
    <h1>Work</h1>
    <WorkItem>Hello 1</WorkItem>
    <WorkItem>Hello 2 </WorkItem>
  </Layout>
;

export default WorkPage;
