import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };
  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xjvllwvl',
      data: inputs
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <section>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          id="name"
          type="text"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.name}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          value={inputs.message}
          rows={5}
          cols={37}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </section>
  );
}
