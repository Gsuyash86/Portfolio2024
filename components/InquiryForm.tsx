"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        // Auto-reset after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-glass"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-blue/5 pointer-events-none" />

      <div className="relative z-10">
        <h2 id="getintouch" className="text-3xl font-bold mb-8 bg-gradient-to-r from-white via-accent-cyan to-white bg-clip-text text-transparent">
          Get in Touch
        </h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl text-white/90">Thank you! Your message has been sent.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-accent-cyan hover:text-accent-blue transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
              >
                {error}
              </motion.div>
            )}
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError(null);
                }}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                minLength={2}
                className={`w-full px-4 py-3 bg-white/5 border ${
                  focusedField === 'name' ? 'border-accent-cyan shadow-glow-cyan' : 'border-white/10'
                } rounded-lg text-white placeholder-transparent focus:outline-none transition-all duration-300 backdrop-blur-sm peer`}
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  name || focusedField === 'name'
                    ? '-top-6 text-sm text-accent-cyan'
                    : 'top-3 text-base text-white/60'
                }`}
              >
                Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className={`w-full px-4 py-3 bg-white/5 border ${
                  focusedField === 'email' ? 'border-accent-cyan shadow-glow-cyan' : 'border-white/10'
                } rounded-lg text-white placeholder-transparent focus:outline-none transition-all duration-300 backdrop-blur-sm peer`}
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  email || focusedField === 'email'
                    ? '-top-6 text-sm text-accent-cyan'
                    : 'top-3 text-base text-white/60'
                }`}
              >
                Email
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setError(null);
                }}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                minLength={10}
                rows={5}
                className={`w-full px-4 py-3 bg-white/5 border ${
                  focusedField === 'message' ? 'border-accent-cyan shadow-glow-cyan' : 'border-white/10'
                } rounded-lg text-white placeholder-transparent focus:outline-none transition-all duration-300 backdrop-blur-sm resize-none peer`}
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  message || focusedField === 'message'
                    ? '-top-6 text-sm text-accent-cyan'
                    : 'top-3 text-base text-white/60'
                }`}
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98, y: 2 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-semibold shadow-lg hover:shadow-glow-cyan transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </span>
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default InquiryForm;
