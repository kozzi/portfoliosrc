import React from 'react';
import s from './Tools.css';
import html from './html5.svg';
import nodejs from './nodejs.svg';
import git from './git-icon.svg';
import photoshop from './photoshop.svg';
import illustrator from './illustrator.svg';
import react from './react.svg';
import webpack from './webpack.svg';
import swift from './swift.svg';
import java from './java.svg';
import ruby from './ruby.svg';

const Tools = () =>
  <section className={s.tools}>
    <h1>Tools, Languages and Frameworks</h1>
    <div className={s.tool}>
      <img src={html} alt="HTML" />
      <p>HTML</p>
    </div>
    <div className={s.tool}>
      <img src={nodejs} alt="NodeJS" />
      <p>NodeJS</p>
    </div>
    <div className={s.tool}>
      <img src={react} alt="React" />
      <p>React</p>
    </div>
    <div className={s.tool}>
      <img src={webpack} alt="Webpack" />
      <p>Webpack</p>
    </div>
    <div className={s.tool}>
      <img src={git} alt="Git" />
      <p>Git</p>
    </div>
    <div className={s.tool}>
      <img src={photoshop} alt="Adobe PS" />
      <p>Photoshop</p>
    </div>
    <div className={s.tool}>
      <img src={illustrator} alt="Adobe Illustrator" />
      <p>Illustrator</p>
    </div>
    <div className={s.tool}>
      <img src={swift} alt="Swift" />
      <p>Swift</p>
    </div>
    <div className={s.tool}>
      <img src={java} alt="Java" />
      <p>Java</p>
    </div>
    <div className={s.tool}>
      <img src={ruby} alt="ruby" />
      <p>Ruby</p>
    </div>
  </section>
;

export default Tools;
