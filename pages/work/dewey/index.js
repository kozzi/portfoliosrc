import React from 'react';
import Layout from '../../../components/Layout';
import BackButton from '../../../components/BackButton';
import Hero from '../Hero';
import Title from '../Title';
import Snippet from '../Snippet';
import s from '../styles.css';
import heroImage from './hero.jpg';
import stock from './stock.jpg';
import sketch1 from './sketch1.jpg';
import sketch2 from './sketch2.jpg';
import logosketch from './logo_sketch.jpg';
import logowire from './deweywire.gif';
import logo from './dewey.png';
import splash from './dewey-splash.jpg';
import screenshot1 from './screenshot1.jpg';
import screenshot2 from './screenshot2.jpg';
import screenshot3 from './screenshot3.jpg';

const DeweyPage = (props) =>
  <Layout {...props}>
    <Hero path={heroImage} alt="Dewey on iOS" />
    <Title>Dewey on iOS</Title>
    <Snippet>
      <p>
        Dewey is an iOS app built using Swift to help me easily search for kindle ebooks in the local public library.
      </p>

      <p>I designed the user interaction, produced all the visual assets, and finally coded it myself.</p>
    </Snippet>

    <img src={stock} className={s.fullWidthImage} alt="Dewey on iOS" />

    <h2>Problem</h2>

    <p>Dewey was created out of frustration for a user flow I find myself repeating over and over again. After all, design is about solving problems :)</p>

    <p>I love borrowing Kindle ebooks from <a href="http://spl.org">Seattle Public Library (SPL)</a>. But I also love browsing physical bookstores when deciding what I want to read.</p>

    <p>It was pretty frustrating that, whenever I find a physical book in a bookstore that I was interested in, I had to <em>manually</em> pull up the mobile-UNfriendly SPL website on my phone, type in the book title, filter the results by ebook, log in, and put a hold on the title on my account.</p>

    <p>Dewey aims to simplify that flow by having the app scan the ISBN, talk to <a href="https://affiliate-program.amazon.com/gp/advertising/api/detail/main.html">Amazon Product Advertising API</a> to retrieve the book title, send a catalogue search request to SPL's website, scrape the results from the page, and then let me put a hold on the title.</p>

    <h2>Design process</h2>

    <p>Here are some early sketches of what this flow could look like.</p>

    <img src={sketch1} className={s.fullWidthImage} alt="Early sketches for Dewey's UX flow" />
    <img src={sketch2} className={s.fullWidthImage} alt="Early sketches for Dewey's UX flow" />

    <p>A primary user design goal for this app is that this scanning/retrieving/holding process has to be quick. It has to be quicker than me doing it manually through my mobile browser, or it defeats the purpose of the app. This led me to design the app to launch directly to the camera scanning screen.</p>

    <p>I first walked through the "happy path", where the user successfully finds a book in the library and places a hold on it.</p>

    <p>I then considered the various failure/side branches. <em>"What if Amazon doesn't have the book in its catalogue - what should the user see?"</em>, <em>"What if the library doesn't have it?"</em>, <em>"What if the user wants to scan multiple books in a row? How do they continue?"</em></p>

    <h2>Development process</h2>

    <p>At the time this was initially built (late 2014), Swift was still a very young language, with relatively few tutorials/best practices out there. I primarily worked off of the official Apple documentation to learn Swift on my own.</p>

    <p>Although this was a fairly small project to begin with, I divided the project further into little pieces that I can test indivdually before putting the pieces together for the end-to-end flow.</p>

    <p>I did this for a few reasons:</p>

    <ol>
      <li><strong>Progress:</strong> It's always super encouraging to see progress! Any progress at all! :) When you break something down into smaller pieces, naturally, you will be able to get something working faster, even if it's just some text printed in the console to show a returned request from Amazon.</li>
      <li><strong>Separation of concerns:</strong> This is just <a href="https://en.wikipedia.org/wiki/Separation_of_concerns">good engineering practice</a>! Given that a piece of my app requires scaping of the SPL (where I expect the page markup to change often), I wanted to decouple the scraping functionality from the rest of the components so that I can easily maintain and update this independently in the future. Furthermore, should SPL decide to give me access to an API for searching its books, I can easily swap out the scrapper component.</li>
      <li><strong>Easier debugging:</strong> When you build a giant monolithic piece of software and wait til the very end to test it, if something doesn't work, there are a million reasons for what went wrong. This makes debugging it that much harder. By building it up and testing it in small pieces along the way, it will make narrowing down bugs a lot easier.</li>
    </ol>

    <h2>Logo design</h2>

    <p>The final logo design, splash screen assets, and colour palette was the last thing I did once I had a mostly working app. Since this was an app for myself, I wanted to personalize it with things I like, such as penguins 🐧!</p>

    <p>Here're brainstorming sketches where I explored different ideas for the logo:</p>

    <img src={logosketch} className={s.fullWidthImage} alt="Brainstorming logo design" />

    <p>You can see I played around with different concepts, including penguins, books, and other scholarly things :) The final logo was drawn in Illustrator and added to the app.</p>

    <img src={logowire} className={s.fullWidthImage} alt="Logo outline" />
    <img src={logo} className={s.fullWidthImage} alt="Logo" />

    <h2>Screenshots</h2>
    <img src={splash} className={s.halfWidthImage} alt="iOS splash screen design" />
    <img src={screenshot1} className={s.halfWidthImage} alt="Screenshot" />
    <img src={screenshot2} className={s.halfWidthImage} alt="Screenshot" />
    <img src={screenshot3} className={s.halfWidthImage} alt="Screenshot" />

    <h2>Languages, frameworks, and tools</h2>

    <p>Illustrator, Photoshop, Swift, Git, Cocoapods, XCode, Interface Builder, Amazon Product Advertising API, and a little web scraping ;)</p>

    <BackButton className={s.backLink}>
      &#8592; Return to portfolio
    </BackButton>
  </Layout>
;

export default DeweyPage;
