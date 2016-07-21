import React from 'react';
import $ from 'jquery';
import s from './ContactForm.css';

class ContactForm extends React.Component {
  static actionUrl = 'https://formspree.io/miss@charingwong.com';

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = {
      name: this.handleChange.bind(this, 'name'),
      email: this.handleChange.bind(this, 'email'),
      subject: this.handleChange.bind(this, 'subject'),
      message: this.handleChange.bind(this, 'message'),
    };

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      disabled: false,
      hasError: false,
      successfullySent: false,
    };
  }

  handleChange(state, e) {
    this.setState({ [state]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    $.ajax({
      url: ContactForm.actionUrl,

      method: 'POST',

      data: {
        name: this.state.name,
        _replyto: this.state.email,
        _subject: this.state.subject,
        message: this.state.message,
      },

      dataType: 'json',

      beforeSend: function beforeSend() {
        this.setState({ disabled: true });
      }.bind(this),

      success: function success() {
        this.setState({
          disabled: false,
          hasError: false,
          successfullySent: true,
        });
      }.bind(this),

      error: function error() {
        this.setState({
          disabled: false,
          hasError: true,
          successfullySent: false,
        });
      }.bind(this),
    });
  }

  render() {
    const errorStyle = this.state.hasError ? {} : { display: 'none' };
    const successStyle = this.state.successfullySent ? {} : { display: 'none' };
    const buttonString = this.state.disabled ? 'Sending...' : 'Send your message';

    return (
      <div className={s.form}>
        <form id="contact-form" action={ContactForm.actionUrl} onSubmit={this.handleSubmit}>
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <div className={s.contactFormField}>
            <label className={s.requiredField}>Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.onChange.name}
              value={this.state.name}
              required
              disabled={this.state.disabled}
              className={s.textField}
            />
          </div>
          <div className={s.contactFormField}>
            <label className={s.requiredField}>Email:</label>
            <input
              type="email"
              name="replyto"
              onChange={this.onChange.email}
              value={this.state.email}
              required
              disabled={this.state.disabled}
              className={s.textField}
            />
          </div>
          <div className={s.contactFormField}>
            <label className={s.requiredField}>Subject:</label>
            <input
              type="text"
              name="_subject"
              onChange={this.onChange.subject}
              value={this.state.subject}
              required
              disabled={this.state.disabled}
              className={s.textField}
            />
          </div>
          <div className={s.contactFormField}>
            <label className={s.requiredField}>Message:</label>
            <textarea
              name="message"
              onChange={this.onChange.message}
              value={this.state.message}
              required
              disabled={this.state.disabled}
              className={s.textArea}
            >
            </textarea>
          </div>
          <input
            type="submit"
            value={buttonString}
            disabled={this.state.disabled}
            className={s.submitButton}
          />
        </form>
        <p className={s.contactFormError} style={errorStyle}>Yikes, a problem occurred while sending your message. Please try again shortly.</p>
        <p className={s.contactFormSuccess} style={successStyle}>Thanks for your message! I'll get back to you as soon as possible!</p>
      </div>
    );
  }
}

export default ContactForm;
