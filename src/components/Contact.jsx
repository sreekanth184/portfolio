import React from 'react';

function Contact() {
  return (
    <div id="contact" className="bg-white text-gray-800 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none"
          ></textarea>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;