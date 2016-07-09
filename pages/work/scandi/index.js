import React from 'react';
import Layout from '../../../components/Layout';
import Hero from '../Hero';
import Title from '../Title';
import Snippet from '../Snippet';
import s from '../styles.css';
import heroImage from './hero2.png';

const ScandiPage = (props) =>
  <Layout {...props}>
    <Hero path={heroImage} alt="Team Scandi" />
    <Title>Team Scandi YouTube Video Art</Title>
    <Snippet>
      <p>
        I started following chess online in late 2015.
        Many strong chess masters have YouTube channels,
        where they regularly record videos of themselves playing
        and simultaneously commentating live on a online chess game.
        Think video games on Twitch, but for chess.
      </p>
      <p>
        I designed and illustrated original artwork used by
        a few popular chess YouTube channels as banners and video thumbnails.
      </p>
    </Snippet>
    <div dangerouslySetInnerHTML={{ __html: '' }} className={s.content} />
  </Layout>
;

export default ScandiPage;
