import React from 'react';
import Layout from '../../../components/Layout';
import Link from '../../../components/Link';
import BackButton from '../../../components/BackButton';
import Hero from '../Hero';
import Title from '../Title';
import Snippet from '../Snippet';
import s from '../styles.css';
import heroImage from './switching.jpg';
import switching from './tablet.jpg';
import lazyswipe from './lazyswipe.jpg';
import switchvideo from './switchvideo.mp4';

const SwitchingPage = (props) =>
  <Layout {...props}>
    <Hero path={heroImage} alt="Multitasking on Tablet OSes" />
    <Title>Multitasking in a tablet OS (Part 1)</Title>
    <Snippet>
      <p>In 2010, Microsoft started building an OS designed for touch and mobile devices.</p>

      <p>As a user experience PM on the core shell team, I owned the user experience and interaction design of the multitasking features on the new OS. I designed shipped both the switching ("serial" multitasking) and snapping ("side by side" multitasking) features in the shell.</p>
    </Snippet>

    <img src={switching} className={s.fullWidthImage} alt="Switching gesture" />

    <h2>Background</h2>

    <p>Design exploration began for this feature in 2010, when tablet hardware was just hitting the market, and there weren't a lot of established patterns yet.</p>

    <p>Windows, at the time, was doubling down on building an operating system where touch input will be a first-class citizen. This is in contrast to where touch is simply bolted on a primarily desktop system (a la Windows XP Tablet PC edition in 2001).</p>

    <p>The whole organization was betting on touch devices.</p>

    <h2>Problem exploration</h2>

    <p>Windows has always been great at multi-tasking, and prides itself on that. How do I translate this power in multitasking from a mouse + desktop environment, to one where touch is the primary input and apps are typically "immersive"?</p>

    <p>As I explored this problem further, I realize that multi-tasking flows can be broken down into two types:</p>

    <ul>
      <li><strong>"Serial" multitasking:</strong> Where the user has one app on the screen at a time, but they flip between tasks in order (hence, in "serial")</li>
      <li><strong>"Side by side" multitasking:</strong> Where the user can see and use multiple things side by side, simultaneously.</li>
    </ul>

    <p>Serial multitasking is explored below. Side-by-side multitasking explorations are documented <Link to="/work/snapping">here</Link>.</p>

    <h2>Design goals</h2>
    <p>On the desktop, user can switch to any app using the taskbar at the bottom of the screen, or &mdash; if you're savvy &mdash; to their <em>most recently used</em> apps through the keyboard shortcut alt-tab.</p>

    <p>We fairly quickly converged on focusing on helping users do the latter, and started developing prioritized design goals:</p>

    <ol>
      <li>Going back to your most recent app is <em>fast</em> (it should not be slower than going back using the "home screen")</li>
      <li>Going back is easy and intuitive (fast is not good enough if it demands a secret incantation to trigger)</li>
    </ol>

    <p>I also worked with some assumptions to make progress (based on some existing data on alt-tab usage):</p>

    <ul>
      <li>Going back to the most recent app is the most common action by the user. That is, there is <em>diminishing frequency</em> to going back to your 2nd/3rd/nth-most recently used app because &mdash; I hypothesized &mdash; users don't actually remember what's further along in their back stack. And they really shouldn't need to.</li>

      <li>I believe the natural behaviour for the user is, if the user is not certain that their app is back there and near the top (i.e. they haven't been switching back and forth between these apps and therefore have them top of mind), users will use the "home screen" to do the switching because that flow is predictable. There is nothing wrong with using the "home screen" to switch.</li>
    </ul>

    <h2>Sketching and prototyping</h2>

    <p>Trigger explorations:</p>
    <ul>
      <li>Swipes from the right</li>
      <li>Double tap home button</li>
      <li>Press and hold home button</li>
    </ul>

    <p>Ergnonomics considerations:</p>
    <ul>
      <li>How are users holding this device?</li>
      <li>Do phone interactions translate?</li>
      <li><em>(It turns out holding a tablet is very different from holding a phone!)</em></li>
    </ul>

    <p>Visualization explorations:</p>
    <ul>
      <li>Is there an explicit visual "mode" used for switching?</li>
      <li>How does app visually appear to user?</li>
    </ul>

    <p>And finally, how much do I optimize for switching to most recently used app?</p>

    <img src={lazyswipe} className={s.fullWidthImage} alt="Whiteboard brainstorm" />

    <h2>Shipping design</h2>

    <p>Below is a snippet of the marketing video describing the interaction around switching between apps, and is what was finally shipped:</p>

    <div className={s.videoContainer}>
      <div className={s.video}>
        <video controls>
          <source src={switchvideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <h2>Key design decisions</h2>

    <h3>Trigger: Swiping from the edge</h3>

    <p>Usability studies showed that users hands tend to be placed close to the edge when holding a tablet-sized device. While home buttons on the phone are usually "thumbable", this was not the case on much larger tablet devices. In fact, forcing the user to reach for the home button ends up being a lot of work on these larger devices. For ergonimic reasons, using an edge swipe as a trigger made sense.</p>

    <h3>Swiping from the <em>left</em> edge</h3>

    <p>Secondly, it is fairly established that things "in the past" tend to be spatially placed on the left in our minds, largely due to reading order. So the left edge was shipped, as it felt most intuitive to our users during testing.</p>

    <h3>No explicit "switch mode"</h3>

    <p>While I allow users to keep switching to older apps, I really focused on making sure switching to the most recent app is extremely fast (and perhaps even a bit fun and playful!). This meant removing the concept of having a visual and explicit "switching mode" that user must enter and exit in the process of switching.</p>

    <p>Instead of forcing the user to first enter some sort of "switch mode" to select a recent app they want to go to, I made switching into one user action: a swipe from the right edge. If the first app swiped in is the one the user wanted to switch to (according to testing & data, it was), we are done. The user can start using the app immediately. There's no need for the user to select anything and exit a mode.</p>

    <h3>Direct manipulation of the app thumbnail</h3>

    <p>I spent a lot of time perfecting the "feel" of that swipe experience. I wanted it to feel authentic, and even a little playful. I wanted to make it feel like the user is manipulating the app directly, and not just some representation of it, like an icon (we called those "remote controls" within the feature crew). So I spent time on little details to make it feel like the app is being pulled and flicked across the screen, including figuring out:</p>

    <ul>
      <li>How the app appears when sliding out of the screen edge under the finger</li>
      <li>Where on the app is positioned relative to the touch point</li>
      <li>When we should and shouldn't show "drop" feedback, and what that feedback looks like (there's actually a subtly different animation between a "quick swipe" and a more "deliberate swipe" to make the "quick swipe" less jarring and the "deliberate swipe" more useful)</li>
    </ul>

    <BackButton className={s.backLink}>
      &#8592; Return to portfolio
    </BackButton>
  </Layout>
;

export default SwitchingPage;
