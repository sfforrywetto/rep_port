'use client'

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred.');
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center bg-[#F0EAD6] p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/20 shadow-md rounded-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold">Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject (optional)"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded h-32"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Send Message
        </button>

        {status && <p className="text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  );
}
