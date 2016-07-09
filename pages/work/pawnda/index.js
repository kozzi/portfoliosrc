import React from 'react';
import Layout from '../../../components/Layout';
import Hero from '../Hero';
import Title from '../Title';
import Snippet from '../Snippet';
import s from '../styles.css';
import heroImage from './hero.png';

const PawndaPage = (props) =>
  <Layout {...props}>
    <Hero path={heroImage} alt="Kalashnikov Pawn-da" />
    <Title>Kalashnikov YouTube Banner Art</Title>
    <Snippet>
      <p>
        Tony is a chess expert and author, and is fairly well known
        in the online chess community. We became friendly on Twitter,
        and I designed and illustrated a YouTube banner that he currently uses for his channel.
      </p>
      <p>
        This design started off as a physical card I had hand drawn
        and snailmailed to Tony, thanking him for his generosity in
        something he did for me. He loved it so much that he wanted to
        make it his YouTube channel banner, so it was later digitized
        into the final product you see here.
      </p>
    </Snippet>
    <div dangerouslySetInnerHTML={{ __html: '' }} className={s.content} />
  </Layout>
;

export default PawndaPage;
