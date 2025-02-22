import React, { useState } from 'react';
import './contact.css';
import { MdEmail } from "react-icons/md";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    emailjs
      .send(
        'service_eznsetp',  // Replace with your EmailJS Service ID
        'template_bsw2h28',  // Replace with your EmailJS Template ID
        formData,
        'jGQfKvJTYjz4YybA1'  // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error('Error details:', error);
        }
      );
  };

  return (
    <div id='contact' className='contact center'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-8 offset-2 text-center'>
            <form className="contact_form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="contact_form_btn">SEND MESSAGE</button>
            </form>
            <a
              href="mailto:prernasoni2000@gmail.com"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <span><MdEmail /> Email me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;