import React, { useState } from 'react';
import Header from '../Components/Header';
import axios from 'axios';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/contact', { name, email, message });
      if (response.status === 200) {
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      {/* ... rest of the content ... */}
      <form onSubmit={handleSubmit}>
        {/* ... form fields ... */}
        <button type="submit">Send Message</button>
      </form>
      {submissionStatus === 'success' && <p>Message sent successfully!</p>}
      {submissionStatus === 'error' && <p>An error occurred. Please try again later.</p>}
    </div>
  );
};

export default ContactPage;
