"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Residential Cleaning",
    "Office & Commercial",
    "Deep Cleaning",
    "Move-In / Move-Out",
    "Post-Construction Cleaning",
    "Carpet & Upholstery Cleaning",
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

    const waUrl = `https://wa.me/27726248177?text=${encodeURIComponent(
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
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-start">
        {/* CONTACT INFO */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1bb6ba]">
            Contact Us
          </h2>
          <p className="text-black mb-6 text-sm sm:text-base">
            Kopano Cleaning Solutions provides professional, reliable, and
            affordable cleaning services for homes and businesses.
          </p>

          <div className="space-y-4 text-black text-sm sm:text-base">
            <p>
              <strong>📍 Location & Address:</strong> <br />
              Johannesburg & Surrounding Areas, South Africa <br />
              123 Main Street, Witbank, Mpumalanga, 1035
            </p>

          <div className="flex items-center gap-4">
  <p className="text-black font-semibold">📞 Phone:</p>
  <span className="text-black">+27 72 624 8177</span>
  <a
    href="tel:+27726248177"
    className="ml-2 px-3 py-1 bg-[#1bb6ba] text-white rounded-lg hover:bg-[#17a0a5] transition text-sm font-medium"
  >
    Call Now
  </a>
</div>


            <p>
              <strong>📧 Email:</strong> <br />
              <a
                href="mailto:info@kopanocleaning.co.za"
                className="text-[#1bb6ba] hover:underline"
              >
                info@kopanocleaning.co.za
              </a>
            </p>

            <p>
              <strong>🕒 Business Hours:</strong> <br />
              Mon – Sat: 8:00 AM – 6:00 PM
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <h4 className="font-semibold text-black mb-3 text-sm sm:text-base">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#1bb6ba] hover:underline text-sm sm:text-base"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-[#1bb6ba] hover:underline text-sm sm:text-base"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/27726248177"
                target="_blank"
                className="text-[#1bb6ba] hover:underline text-sm sm:text-base"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* QUOTE FORM */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#1bb6ba]">
            Get a Free Quote
          </h2>
          <p className="text-center text-black mb-6 text-sm sm:text-base">
            Complete the form and we’ll respond quickly with a custom quote.
          </p>

          {submitted && (
            <div className="mb-6 text-center text-green-600 font-semibold animate-fadeIn">
              Quote request sent successfully! ✅
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#1bb6ba]"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#1bb6ba]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#1bb6ba]"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#1bb6ba]"
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
              className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#1bb6ba]"
            />

            <button
              type="submit"
              className="w-full bg-[#1bb6ba] hover:bg-[#17a0a5] text-white font-bold py-4 rounded-2xl transition shadow-lg text-sm sm:text-base"
            >
              Request Quote via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
