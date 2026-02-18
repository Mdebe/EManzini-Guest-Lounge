"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Room Booking",
    "Event Booking",
    "Private Lounge Reservation",
    "Catering Services",
    "VIP Packages",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMessage = `Hello, I would like a quote.

Service: ${form.service}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Message: ${form.message}`;

    const waUrl = `https://wa.me/27727102645?text=${encodeURIComponent(
      waMessage
    )}`;
    window.open(waUrl, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/images/emanzini-lounge-hero.jpg"
          alt="EManzini Guest Lounge"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold italic text-[#c59d5f] mb-4 drop-shadow-lg">
            Contact EManzini
          </h1>
          <p className="text-gray-200 max-w-3xl text-lg md:text-xl drop-shadow-md">
            Book a room, reserve the lounge for your event, or request a VIP experience. Our team is here to assist.
          </p>
        </div>
      </section>

      {/* Contact + Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="bg-black/40 p-8 rounded-3xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-bold text-[#c59d5f] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-200">
            Reach out directly or use the form to request a quote or book a service.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#c59d5f]">📍 Location</h3>
              <p>33 Mona Street, Model Park, Mtubatuba, KwaZulu-Natal</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#c59d5f]">📞 Phone</h3>
              <p>+27 72 710 2645</p>
              <a
                href="tel:+27727102645"
                className="inline-block mt-2 px-4 py-2 bg-[#c59d5f] text-black rounded-lg font-semibold hover:bg-[#d4af6c] transition"
              >
                Call Now
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-[#c59d5f]">📧 Email</h3>
              <a
                href="mailto:info@emanzini.co.za"
                className="hover:underline text-[#c59d5f]"
              >
                info@emanzini.co.za
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-[#c59d5f]">🕒 Opening Hours</h3>
              <p>Monday – Sunday: 8:00 AM – 10:00 PM</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-[#c59d5f] hover:underline">Facebook</a>
            <a href="#" className="text-[#c59d5f] hover:underline">Instagram</a>
            <a href="https://wa.me/27727102645" target="_blank" className="text-[#c59d5f] hover:underline">WhatsApp</a>
          </div>
        </div>

        {/* Booking / Quote Form */}
        <div className="bg-black/40 p-8 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#c59d5f]">
            Request a Quote / Booking
          </h2>
          <p className="text-center text-gray-200 mb-6">
            Fill out the form below and we’ll respond quickly.
          </p>

          {submitted && (
            <div className="mb-6 text-center text-green-400 font-semibold animate-fadeIn">
              Quote request sent successfully! ✅
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#c59d5f]"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#c59d5f]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#c59d5f]"
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#c59d5f]"
              >
                <option value="" disabled>
                  Select Service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Additional details (optional)"
              rows={4}
              className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#c59d5f]"
            />

            <button
              type="submit"
              className="w-full bg-[#c59d5f] hover:bg-[#d4af6c] text-black font-bold py-4 rounded-2xl transition shadow-lg text-sm sm:text-base"
            >
              Request Quote via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-[#c59d5f]">Our Location</h2>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.123456789!2d32.123456!3d-28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc1234567890%3A0x1234567890abcdef!2sEManzini%20Guest%20Lounge!5e0!3m2!1sen!2sza!4v1678901234567"
            width="100%"
            height="400"
            className="border-0 w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Sticky Mobile Button */}
      <a
        href="https://wa.me/27727102645"
        className="fixed bottom-4 right-4 md:hidden bg-[#c59d5f] text-black font-bold px-6 py-3 rounded-full shadow-xl animate-bounce hover:bg-[#d4af6c] transition z-50"
      >
        Book Now
      </a>
    </div>
  );
}
