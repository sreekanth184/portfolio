import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/sreekanth184",
      color: "hover:text-gray-900",
      username: "@sreekanth184",
      bgColor: "hover:bg-gray-50",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/sreekanth-podaralla/",
      color: "hover:text-orange-500",
      username: "Sreekanth Reddy",
      bgColor: "hover:bg-orange-50",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-6 h-6" />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=sreekanthreddy184@gmail.com",
      color: "hover:text-orange-500",
      username: "sreekanthreddy184@gmail.com",
      bgColor: "hover:bg-orange-50",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-6 h-6" />,
      url: "https://x.com/Sreekanth1804",
      color: "hover:text-orange-500",
      username: "@Sreekanth1804",
      bgColor: "hover:bg-orange-50",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init("XttmZ-9U1HMIufz9l");

      await emailjs.send("service_av2yuli", "template_rlg0xke", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "sreekanthreddy184@gmail.com",
      });

      toast.success('Message sent successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error('Failed to send message. Please try again.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <ToastContainer />
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's <span className="text-orange-500">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${link.bgColor}`}
              ></div>
              <div className="relative flex flex-col items-start gap-4">
                <div className="flex items-center justify-between w-full">
                  <div className={`p-2 rounded-lg bg-white ${link.color}`}>
                    {link.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-600">{link.username}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Open for Opportunities
              </h3>
              <p className="text-gray-600 mb-4">
                Looking for new opportunities and interesting projects to work
                on.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
