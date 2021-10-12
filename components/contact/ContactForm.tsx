import React, { useState, useEffect } from 'react';
import Notification from '../ui/Notification';

import classes from './ContactForm.module.css';

const sendContactData = async (contactDetails: any) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
};

interface Props {}

const ContactForm: React.FC<Props> = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState<string | null>(null); // 'pending', 'success', 'error'
  const [requestErrorMessage, setRequestErrorMessage] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestErrorMessage('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // Todo: client-side validation(optional)

    setRequestStatus('pending');
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    } catch (error) {
      // @ts-ignore
      setRequestErrorMessage(error.message);
      setRequestStatus('error');
    }
  };

  let notification;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  } else if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Message sent successfully!',
    };
  } else if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestErrorMessage,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            cols={30}
            rows={5}
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>

      {notification && (
        <Notification
          message={notification.message}
          status={notification.status}
          title={notification.title}
        />
      )}
    </section>
  );
};

export default ContactForm;
