import React from 'react';
import Layout from '../../components/Layout/Layout';
import ContactForm from './ContactForm';
import s from './styles.css';

const ContactPage = (props) =>
  <Layout {...props}>
    <h1>Get in touch</h1>

    <div className={s.blurb}>
      <p>Feel free to reach out if you have freelance inquiries, need advice, want project feedback, or simply just want to grab <a href="https://en.wikipedia.org/wiki/Bubble_tea">bubble tea</a> together! :)</p>

      <p>The easiest way to get in touch is to tweet at me <a href="http://twitter.com/kozzi">@kozzi</a>!</p>

      <p>If Twitter's not your thing, you can email me directly, or use the form here.</p>

      <p><a href="mailto:hi@charingwong.com">hi@charingwong.com</a></p>
    </div>
    <ContactForm />
  </Layout>
;

export default ContactPage;
