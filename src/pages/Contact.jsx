import React, { useState } from "react";
import Header from "../components/Header";
import banner from "../assets/servicesBanner1.png";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[700px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-semibold mb-8">
          Contact Us
        </h1>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg grid md:grid-cols-2 overflow-hidden">
          {/* Form Section */}
          <div className="p-10">
            <h2 className="font-bold text-[54px] leading-[100%] tracking-[0px] mb-2">
              Get in <span className="text-[#1695A3]">Touch</span>
            </h2>
           <p className="text-[32px] leading-[40px] font-semibold text-gray-600 mb-6 ">
              Let’s Build Your Strategy for Growth
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number *"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#1695A3] text-white py-3 rounded-md hover:bg-teal-700 transition font-medium"
              >
                SEND
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex items-center gap-8 mt-8 text-sm text-gray-700">
              <div>
                <p className="font-semibold">📞 Phone</p>
                <p className="text-[#1695A3]">03 5432 1234</p>
              </div>
              <div>
                <p className="font-semibold">📠 Fax</p>
                <p className="text-[#1695A3]">03 5432 1234</p>
              </div>
              <div>
                <p className="font-semibold">📧 Email</p>
                <p className="text-[#1695A3]">info@mechstratglobal.com</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843821953054!2d144.95373631531844!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c3a3b456b4b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1676123456789"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
           <footer className="bg-[#1695A3] py-8 px-6">
                <div className="container mx-auto text-center">
                    <p className="text-white text-sm mb-2">
                        © 2025 · MechStrat Global. All rights reserved.
                    </p>
                    <p className="text-white/90 text-sm">
                        Business Strategy for a Smarter Manufacturing World
                    </p>
                </div>
            </footer>
    </div>
  );
}
