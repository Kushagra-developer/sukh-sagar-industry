"use client";
import { useState } from "react";
  return (
    <div className="container mx-auto px-4 py-8">
      <br />
      <br />
      <br />
      <br />
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="Order Inquiry">Product related</option>
                <option value="Catering Services">Order related</option>
                <option value="Feedback">Feedback</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
          <p className="mb-2">
            <strong>Address:</strong> Plot no.15 Sukh Sagar Industries,
            Govindpuri, Basai Road, Gurgaon 122001
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +91 9810160166
          </p>
          <p className="mb-2">
            <strong>Email:</strong> dy_sachdeva@yahoo.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
