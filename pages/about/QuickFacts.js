import React from 'react';
import s from './QuickFacts.css';
import profileImage from '../../static/images/profile2.jpg';

const QuickFacts = () =>
  <section className={s.quickFacts}>
    <img src={profileImage} alt="Charing" />
    <h1>tl;dr</h1>
    <p className={s.heading}>School</p>
    <p>University of Waterloo</p>
    <p>Software engineering</p>
    <p className={s.heading}>Work</p>
    <p>Microsoft</p>
    <p>Code.org</p>
    <p>Morgan Stanley</p>
    <p className={s.heading}>Lived in</p>
    <p>Hong Kong</p>
    <p>London (UK)</p>
    <p>Seattle</p>
    <p>Toronto</p>
  </section>
;

export default QuickFacts;
