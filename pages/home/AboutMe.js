import React from 'react';
import Link from '../../components/Link';
import s from './AboutMe.css';
import profileImage from '../../static/images/profile2.jpg';

const AboutMe = () =>
  <section className={s.aboutMe}>
    <h1>About</h1>
    <img src={profileImage} alt="Charing Wong" className={s.profile} />
    <h2>Hi, I'm Charing!
      <span className={s.asterisk}>
        *
        <em>Psst! It rhymes with 'bling'!</em>
      </span>
    </h2>

    <p>
    I design user experiences, and I make them real with code.
    I &hearts; the entire process of creation. I am at my happiest when
    I am surrounded by really smart people and learning something new.
    </p>

    <p>Previously, I was product manager at <a href="http://microsoft.com">Microsoft</a>, and engineering contributor at <a href="http://code.org">Code.org</a>.</p>

    <p className={s.more}><Link to="/about">More &#8594;</Link></p>
  </section>
;

export default AboutMe;
