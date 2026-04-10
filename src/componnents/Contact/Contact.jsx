import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا ممكن تبعتي البيانات لأي API أو service
    alert(`Thank you ${formData.name}, your message has been sent!`);
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <div className="bg-dark contact-section py-5">
      <div className="container">
        <h2 className="text-white mb-4" data-aos="fade-up">Contact Me</h2>
        <p className="text-white mb-5" data-aos="fade-up">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up">
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

