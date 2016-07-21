import React from 'react';
import Link from '../../components/Link';
import WorkItem from '../work/WorkItem';
import s from './FeaturedWork.css';
import scandiImage from '../work/scandi/hero.jpg';
import deweyImage from '../work/dewey/hero.jpg';

const FeaturedWork = () =>
  <section className={s.featuredWork}>
    <h1>Featured Work</h1>
    <WorkItem projectPath="/work/scandi" heroImagePath={scandiImage}>
      <h2>Team Scandi</h2>
      <p>Illustration, YouTube channel design</p>
    </WorkItem>
    <WorkItem projectPath="/work/dewey" heroImagePath={deweyImage}>
      <h2>Dewey</h2>
      <p>iOS development (Swift), Interaction design, Illustration, Branding</p>
    </WorkItem>
    <p className={s.more}><Link to="/work">View full portfolio &#8594;</Link></p>
  </section>
;

export default FeaturedWork;
