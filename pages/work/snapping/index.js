import React from 'react';
import Layout from '../../../components/Layout';
import Link from '../../../components/Link';
import Hero from '../Hero';
import Title from '../Title';
import Snippet from '../Snippet';
import s from '../styles.css';
import heroImage from './snapping.jpg';
import snapping from './snapping2.jpg';
import beforesnap from './beforesnap.jpg';
import aftersnap from './aftersnap.jpg';
import whiteboard from './whiteboard.jpg';
import whiteboard2 from './whiteboard2.jpg';
import snapVideo from './snapping.mp4';

const SnappingPage = (props) =>
  <Layout {...props}>
    <Hero path={heroImage} alt="Multitasking on Tablet OSes" />
    <Title>Multitasking in a tablet OS (Part 2)</Title>
    <Snippet>
      <p>In 2010, Microsoft started building an OS designed for touch and mobile devices.</p>

      <p>As a user experience PM on the core shell team, I owned the user experience and interaction design of the multitasking features on the new OS. I designed shipped both the switching ("serial" multitasking) and snapping ("side by side" multitasking) features in the shell.</p>
    </Snippet>

    <img src={snapping} className={s.fullWidthImage} alt="Snapped apps side by side" />

    <h2>Background</h2>

    <p>This is a <Link to="/work/switching">continuation of the building multitasking capabilities in a tablet OS</Link>. Snapping, which allows a user to easily position two apps side-by-side, addresses the other part of multitasking, where users are using two or more apps at once.</p>

    <h2>Design goals</h2>

    <p>Compared to serial multitasking, my hunch told me that side-by-side multitasking will be less common, though it provides a lot of valuable to those that use it.</p>

    <p>In other words, while I would like to make this experience easy, fast and intuitive, I do not want it to get in the way of <Link to="/work/switching">going back to the most recent app</Link>.</p>

    <h2>Sketching and prototyping</h2>

    <p>Trigger explorations: How do I get from this state...</p>

    <img src={beforesnap} className={s.fullWidthImage} alt="One app on screen" />

    <p>...to this state?</p>

    <img src={aftersnap} className={s.fullWidthImage} alt="Two apps side by side" />

    <p>Should I build a mode for "app manipulation"?</p>

    <p>Should users be allowed to have more than 2 app side by side?</p>

    <p>During these explorations, I noticed there were other flows where the user is also manipulating an app: when switching to a previous app. I wondered if I could use this opportunity to also let the user snap this app side by side with the current one? I thought it was nice way to build on top an existing feature and built a prototype of that!</p>

    <img src={whiteboard} className={s.fullWidthImage} alt="Whiteboard brainstorm" />

    <img src={whiteboard2} className={s.fullWidthImage} alt="Whiteboard brainstorm" />

    <h2>Iterating</h2>

    <p>Upon user testing however, we realized that the app at the top of the "back stack" isn't usually the app user wanted to snap. Put another way, the app the user wants to snap isn't the most recently used app. In fact, as we watched users try to use this feature, it became an awkward dance of:</p>

    <ul>
      <li>I'm looking at the app I want to snap</li>
      <li>I figure out that I have to switch away from it so that said app will be at the top of the backstack</li>
      <li>I bring it back in from the side so that I can snap it</li>
    </ul>

    <p>I took feedback from the studies and continued to look for other ways a user can put two apps side by side.</p>

    <h2>Shipping design</h2>

    <p>The final shipped design lets user to grab the app on screen, and snap it to the side directly, which is far more intuitive and easy.</p>

    <div className={s.videoContainer}>
      <div className={s.video}>
        <video controls>
          <source src={snapVideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <h2>Snap design patterns</h2>

    <p>As part of building this feature, I was also responsible for producing design guidelines for how apps should think about their snapped states, and the transition in and out of it.</p>

    <p>For this, I produced content and spoke at the <a href="https://channel9.msdn.com/events/Windows-Camp/Windows-8-UX-Fundamentals-Training-Workshop-2012/WUX-006">Windows UX Training workshop</a> in 2012.</p>

    <div className={s.videoContainer}>
      <div className={s.video}>
        <iframe src="https://channel9.msdn.com/Events/Windows-Camp/Windows-8-UX-Fundamentals-Training-Workshop-2012/WUX-006/player" allowFullScreen frameBorder="0"></iframe>
      </div>
    </div>

    <div className={s.backLink}>
      <Link to="/work">&#8592; Return to portfolio</Link>
    </div>
  </Layout>
;

export default SnappingPage;
