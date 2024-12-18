import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { ArrowUpRight, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/sreekanth184',
      color: 'hover:text-gray-900',
      username: '@sreekanth184',
      bgColor: 'hover:bg-gray-50'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/sreekanth-podaralla/',
      color: 'hover:text-blue-600',
      username: 'Sreekanth Reddy',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6" />,
      onClick: () => setIsModalOpen(true),
      color: 'hover:text-red-500',
      username: 'sreekanthreddy184@gmail.com',
      bgColor: 'hover:bg-red-50'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-6 h-6" />,
      url: 'https://twitter.com',
      color: 'hover:text-blue-400',
      username: '@username',
      bgColor: 'hover:bg-blue-50'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configure EmailJS with your details
      emailjs.init({
        publicKey: "YOUR_EMAILJS_PUBLIC_KEY", // Replace with your EmailJS public key
      });

      // Send email
      const response = await emailjs.send(
        "YOUR_SERVICE_ID",   // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",  // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'sreekanthreddy184@gmail.com'
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px bg-blue-600 w-8"></div>
            <span className="text-blue-600 font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Let's Connect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              onClick={link.onClick}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-white p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div className={`absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${link.bgColor}`}></div>
              <div className="relative flex flex-col items-start gap-4">
                <div className="flex items-center justify-between w-full">
                  <div className={`p-2 rounded-lg bg-gray-50 ${link.color}`}>
                    {link.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{link.name}</h3>
                  <p className="text-sm text-gray-600">{link.username}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Email Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-8 w-full max-w-md relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 mt-4 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 mt-4 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Open for Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Looking for new opportunities and interesting projects to work on.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sreekanthreddy184@gmail.com"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank" 
                rel="noreferrer"
              >
                <FaEnvelope className="w-4 h-4" />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;