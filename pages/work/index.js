import React from 'react';
import Layout from '../../components/Layout';
import WorkItem from './WorkItem';
import Tools from './Tools';
import scandiImage from './scandi/hero2.png';
import pawndaImage from './pawnda/hero.png';
import deweyImage from './dewey/hero.jpg';
import switchingImage from './switching/switching.jpg';
import snappingImage from './snapping/snapping.jpg' ;

const WorkPage = (props) =>
  <Layout {...props}>
    <WorkItem projectPath="/work/scandi" heroImagePath={scandiImage}>
      <h2>Team Scandi</h2>
      <p>Illustration, YouTube channel design</p>
    </WorkItem>
    <WorkItem projectPath="/work/pawnda" heroImagePath={pawndaImage}>
      <h2>Pawn-da</h2>
      <p>Illustration, YouTube channel design</p>
    </WorkItem>
    <WorkItem projectPath="/work/dewey" heroImagePath={deweyImage}>
      <h2>Dewey</h2>
      <p>iOS development (Swift), Interaction design, Illustration, Branding</p>
    </WorkItem>
    <WorkItem projectPath="/work/switching" heroImagePath={switchingImage}>
      <h2>Switching</h2>
      <p>Interaction design, Product management</p>
    </WorkItem>
    <WorkItem projectPath="/work/snapping" heroImagePath={snappingImage}>
      <h2>Snapping</h2>
      <p>Interaction design, Product management, Design guideline development</p>
    </WorkItem>
    <Tools />
  </Layout>
;

export default WorkPage;
