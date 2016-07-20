import React from 'react';
import Layout from '../../../components/Layout';
import BackButton from '../../../components/BackButton';
import Hero from '../Hero';
import Title from '../Title';
import Snippet from '../Snippet';
import s from '../styles.css';
import heroImage from './hero2.png';
import sketch1 from './sketch1.jpg';
import sketch2 from './sketch2.jpg';
import sketch3 from './sketch3.jpg';
import sketch4 from './sketch4.jpg';
import dark1 from './dark1.png';
import dark2 from './dark2.png';

const ScandiPage = (props) =>
  <Layout {...props}>
    <Hero path={heroImage} alt="Team Scandi" />
    <Title>Team Scandi YouTube Video Art</Title>
    <Snippet>
      <p>
        Chess YouTube channels are growing in popularity,
        for both instruction and entertainment.
        Strong chess masters regularly record videos of themselves playing
        and simultaneously commentating on an online chess game.
      </p>
      <p>
        I designed and illustrated original artwork used by
        one of the most popular channels in the online chess community.
      </p>
    </Snippet>

    <img src={sketch1} className={s.fullWidthImage} alt="Team Scandi brainstorm sketches" />

    <h2>Design Process</h2>
    <p>
      When I first started the project, I knew I wanted to draw something
      that the chess master, John Bartholomew, and his followers would <em>get</em>.
      I knew early on I didn't want to draw some generic chess art (cause
      anyone can do that). As a fan and follower myself, I felt like I was in
      a unique position to take I know about him and his followers, and create
      something fun!
    </p>

    <h2>Brainstorming</h2>
    <p>
      I started by exploring the following themes:
    </p>
    <ol>
      <li>
        <strong>Scandinavian Defense: </strong>
        It is well-known among John's fans that he loves playing the <a href="https://en.wikipedia.org/wiki/Scandinavian_Defense">Scandinavian Defense</a>. So much so, that his fans call themselves <em>Team Scandi</em>.
      </li>
      <li>
        <strong>Fins:</strong> John's online handle on online chess sites, and on Twitter, is <em>Fins</em>.
      </li>
      <li>
        <strong>Starbucks:</strong> John is a vocal fan of Starbucks, and would frequently tout it on cam.
      </li>
    </ol>

    <p>
      Armed with Scandinavia + Fins + Starbucks, I began brainstorming and sketching ideas.
    </p>

    <p>
      The Scandinavian Defense is a chess opening that involves opposing pawns standing diagonally from each other in the centre of the chess board, so I sketched around that idea. Incidentally, Scandinavian is also a style of design, so I played around with Scandinavian design motifs as well.
    </p>

    <img src={sketch2} className={s.fullWidthImage} alt="Scandinavian Defense brainstorm sketches" />
    <img src={sketch3} className={s.fullWidthImage} alt="Scandinavian design brainstorm sketches" />

    <p>
      I wanted to see if I could also play on the word <em>"fins"</em> and include shark- and/or water-themed design elements.
    </p>

    <img src={sketch4} className={s.fullWidthImage} alt="Fins and water-themed brainstorm sketches" />

    <h2>Putting it all together</h2>

    <p>
      The final artwork included a few more details I came up with as I was working with it on Illustrator:
    </p>

    <ol>
      <li>
        <strong>Arrows + circles:</strong> These are quite common in chess videos. John, and other chess YouTubers, commonly use circles to highlight a piece, and arrows to indicate potential moves.
      </li>
      <li>
        <strong>Bullet icon:</strong> Bullet chess is chess played with REALLY fast time controls (i.e. where each side only has 1 minute to make all their moves). Bullet chess videos are on regular rotation on John's channel, and are some of his most entertaining videos due to the speed at which chess is played.
      </li>
      <li>
        <strong>Berserk icon:</strong> "Berserking" is a feature on popular chess website, lichess.org, where a player takes a risk by choosing to cut their available time in half in order to gain an extra point if they win the game. John does this frequently in his bullet videos, and it's heart-attack-inducing.
      </li>
    </ol>

    <p>
      I was happy with the outcome, and received a lot of positive feedback from him and his fans. Here it is in action, used as the title thumbnail in his archived live stream:
    </p>

    <div className={s.videoContainer}>
      <div className={s.video}>
        <iframe src="https://www.youtube.com/embed/chayMvX8VjA?autoplay=0&showinfo=0&start=22" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>

    <p>
      I've also created assets for use on dark themes.
    </p>

    <img src={dark1} className={s.fullWidthImage} alt="Dark theme with blue accent" />
    <img src={dark2} className={s.fullWidthImage} alt="Dark theme with orange accent" />

    <h2>Software and tools</h2>

    <p>Illustrator, Photoshop, and good old-fashioned pen and paper</p>

    <BackButton className={s.backLink}>
      &#8592; Return to portfolio
    </BackButton>
  </Layout>
;

export default ScandiPage;
