import React from 'react';
import Layout from '../../../components/Layout';
import Link from '../../../components/Link';
import BackButton from '../../../components/BackButton';
import Hero from '../Hero';
import Title from '../Title';
import Snippet from '../Snippet';
import s from '../styles.css';
import heroImage from './hero.jpg';
import card from './card.jpg';
import sketch1 from './sketch1.jpg';
import sketch2 from './sketch2.jpg';
import sketch3 from './sketch3.jpg';
import youtube from './youtube.jpg';
import youtube2 from './youtube2.jpg';

const PawndaPage = (props) =>
  <Layout {...props}>
    <Hero path={heroImage} alt="Kalashnikov Pawn-da" />
    <Title>Pawn-da YouTube Banner Art</Title>
    <Snippet>
      <p>
        Tony Rotella is a chess expert and author of the chess book, <a href="https://smile.amazon.com/Killer-Sicilian-Fighting-1e4-Kalashnikov/dp/1857446658/">The Killer Sicilian</a>. He is well known in the online chess community and also runs his own YouTube chess channel.
      </p>
      <p>
        I designed and illustrated the banner that he currently uses for his channel.
      </p>
    </Snippet>

    <img src={sketch1} className={s.fullWidthImage} alt="Panda sketches" />

    <h2>Token of thanks</h2>
    <p>
      This design was initially for a physical hand drawn card that I snailmailed to Tony, as a token of thanks for his generosity in something he did for me. He loved the design so much that he wanted to make it his YouTube channel banner, so it was later digitized into the final product you see above.
    </p>

    <h2>Design process</h2>
    <p>
      Much like the <Link to="/work/scandi">Team Scandi art</Link>, I wanted to draw something on the card that Tony would appreciate, and perhaps even chuckle at.
    </p>

    <p>I started with the following themes:</p>

    <ol>
      <li>
        <strong>Panda:</strong> Because that's Tony's favourite animal :P There's plenty of banter between us about this on Twitter.
      </li>
      <li>
        <strong>Sicilian/Kalashnikov chess opening:</strong> One of Tony's favourite chess openings. In fact, he published a very comprehensive video series on it on YouTube, and had written an entire book about it.
      </li>
    </ol>

    <h2>Brainstorming</h2>
    <p>
      The Kalashnikov is a chess opening around gaining central space on the board, and forcing white's knight to the edge of the board (the a3 square specifically), which is not a place you generally want your knight to be. So I played around with these ideas in my sketches.
    </p>

    <img src={sketch2} className={s.fullWidthImage} alt="Kalashnikov opening sketches" />
    <img src={sketch3} className={s.fullWidthImage} alt="Kalashnikov opening sketches" />

    <h2>Final Card</h2>
    <p>
      This was close to final version of the hand-drawn that was snail mailed to him. I had limited pencil crayons on hand, so I coloured everything with what I had (mostly primary colours).
    </p>

    <img src={card} className={s.fullWidthImage} alt="Hand drawn card" />

    <p>
      He loved it so much, I eventually digitized it for him.
    </p>
    <p>
      YouTube has very <a href="https://support.google.com/youtube/answer/2972003">specific requirements</a> around where the primary content should be, and what parts of the illustration would be cut off on various device form factors (from mobile phones, to 60" TVs). I took these requirements into account and relaid out the elements of the illustration so that it is fit for YouTube.
    </p>

    <img src={youtube} className={s.fullWidthImage} alt="Artwork made to fit YouTube layout" />

    <img src={youtube2} className={s.fullWidthImage} alt="Artwork made to fit YouTube layout" />

    <p>
      You can see the illustration in action on his <a href="https://www.youtube.com/user/TonyRotella">YouTube channel</a>.
    </p>

    <h2>Software and tools</h2>

    <p>Illustrator, Photoshop, and good old-fashioned pen and paper</p>

    <BackButton className={s.backLink}>
      &#8592; Return to portfolio
    </BackButton>
  </Layout>
;

export default PawndaPage;
