import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // TODO: Implement form submission logic
    alert('Message sent successfully!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 gradient-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-12 left-12 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-12 right-12 w-28 h-28 bg-blue-300/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-300/20 rounded-full animate-bounce-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            Let's collaborate on something amazing and build the future together
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Email</h3>
                <p className="text-white opacity-90">{resumeData.personalInfo.email}</p>
                <p className="text-white/60 text-sm">Send me an email anytime</p>
              </div>
            </div>
            
            <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Phone</h3>
                <p className="text-white opacity-90">+91 {resumeData.personalInfo.phone}</p>
                <p className="text-white/60 text-sm">Available Mon-Fri 9AM-6PM</p>
              </div>
            </div>
            
            <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Location</h3>
                <p className="text-white opacity-90">{resumeData.personalInfo.location}</p>
                <p className="text-white/60 text-sm">India</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="tilt-card relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-blue-300/20 rounded-3xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative glass rounded-3xl p-8 bg-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300 resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-white to-blue-100 text-blue-600 py-4 rounded-xl font-semibold hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
