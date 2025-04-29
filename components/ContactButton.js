'use client'
import { submitContactMessage } from '@/services/contact';
import { useState, useEffect } from 'react';

const ContactButton = ({ currentUser = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      // Call your API function
      await submitContactMessage(formData, currentUser?.id);
      
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Auto-close after success (optional)
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`
          flex items-center justify-center
          w-14 h-14 md:w-16 md:h-16
          rounded-full
          bg-gradient-to-br from-cyan-600 to-sky-700
          text-white
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-in-out
          ${isOpen ? '!w-40 !rounded-2xl' : ''}
          hover:scale-110
          focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
          overflow-hidden
          ${!isOpen && !isHovering ? 'animate-float' : ''}
          ${isHovering ? 'animate-vibrate' : ''}
        `}
        aria-label="Contact form"
      >
        <span className={`text-xl ${isOpen ? 'mr-2' : 'absolute'}`}>✉️</span>
        <span className={`
          whitespace-nowrap
          transition-all duration-300
          ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'}
        `}>
          Contact Me
        </span>
      </button>

      {/* Contact Form */}
      {isVisible && (
        <div className={`
          absolute bottom-20 right-0
          w-96 sm:w-96 md:w-[30rem]
          bg-white
          border-2
          border-x-cyan-100
          rounded-xl
          shadow-2xl
          p-6
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}
        `}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 text-center">Get in Touch</h3>
            
            {submitStatus.message && (
              <div className={`p-3 rounded-lg text-sm ${
                submitStatus.success 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-slate-600">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-slate-600">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-medium text-slate-600">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="4"
                required
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 bg-gradient-to-r from-cyan-600 to-sky-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg ${
                isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:from-cyan-700 hover:to-sky-800 hover:animate-pulse'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactButton;