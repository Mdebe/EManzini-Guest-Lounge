"use client";

import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold text-[#1bb6ba]">
            About Kopano Cleaning Solutions
          </h1>

          <p className="text-gray-800 text-lg leading-relaxed">
            Kopano Cleaning Solutions is a trusted professional cleaning company
            serving Johannesburg & surrounding areas. We specialize in
            residential and commercial cleaning with a strong focus on quality,
            reliability, and customer satisfaction.
          </p>

          <p className="text-gray-700">
            <strong>Directors:</strong><br />
            Mr Mabitjie Makeke<br />
            Ms Makhutso Maleka
          </p>
        </div>

        <Image
          src="/images/team.jpeg"
          alt="Kopano Cleaning Team"
          width={600}
          height={400}
          className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-[#1bb6ba]">
          Our Mission, Vision & Values
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-2 text-[#1bb6ba]">Mission</h3>
            <p>
              To deliver professional, reliable, and environmentally responsible
              cleaning services that exceed expectations.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-2 text-[#1bb6ba]">Vision</h3>
            <p>
              To be one of South Africa’s most trusted and recognized cleaning
              companies.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold mb-2 text-[#1bb6ba]">Values</h3>
            <p>
              Quality, Trust, Reliability, Transparency, and Customer Excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14 text-[#1bb6ba]">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Mabitjie Makeke", role: "Co-Director" },
            { name: "Makhutso Maleka", role: "Co-Director" },
            { name: "Support Team", role: "Cleaning Professionals" },
          ].map((member) => (
            <div
              key={member.name}
              className="p-6 bg-white rounded-2xl shadow-2xl hover:-translate-y-2 transition"
            >
              <Image
                src="/images/team.jpeg"
                alt={member.name}
                width={400}
                height={250}
                className="rounded-xl mb-4"
              />
              <h3 className="font-bold text-xl mb-2">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 Social Media Feed Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-14 text-[#1bb6ba]">
          Follow Our Latest Work
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Facebook Feed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https://web.facebook.com/kopanocleaning&tabs=timeline&width=500&height=600"
              width="100%"
              height="400"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="encrypted-media"
            />
          </div>

          {/* TikTok Feed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl flex justify-center">
            <iframe
              src="https://www.tiktok.com/embed/@kopano_cleaning"
              width="100%"
              height="400"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(to right, #1bb6ba, #0e7c7f)" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-white">
          Ready to Experience a Cleaner Space?
        </h2>
        <a
          href="https://wa.me/27726248177"
          className="bg-white text-[#1bb6ba] px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition"
        >
          Contact Us Today
        </a>
      </section>
    </>
  );
}
