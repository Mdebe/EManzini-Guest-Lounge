"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/emanzini-exterior.jpg",
    title: "Experience Comfort & Luxury",
    description: "Premium accommodation in the heart of Mtubatuba.",
  },
  {
    image: "/images/s3.jpg",
    title: "Elegant & Relaxing Rooms",
    description: "Designed for comfort, privacy, and peaceful rest.",
  },
  {
    image: "/images/s6.jpg",
    title: "Elegant & Relaxing Rooms",
    description: "Designed for comfort, privacy, and peaceful rest.",
  },
  {
    image: "/images/b1.jpg",
    title: "Vibrant Lounge & Events",
    description: "Unwind, celebrate, and enjoy unforgettable nights.",
  },
  {
    image: "/images/emanzini-bar.jpg",
    title: "Drinks, Music & Great Atmosphere",
    description: "Where hospitality meets entertainment.",
  },{
    image: "/images/b2.jpg",
    title: "Drinks, Music & Great Atmosphere",
    description: "Where hospitality meets entertainment.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fromDate, setFromDate] = useState("2026-02-18");
  const [toDate, setToDate] = useState("2026-02-19");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Checking availability from ${fromDate} to ${toDate}`);
  };

  return (
    <>
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Logo */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
          <img
            src="/images/emanzini-logo.png"
            alt="EManzini Guest Lounge Logo"
            className="h-28 md:h-34 object-contain"
          />
        </div>

        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-100 animate-zoom-in-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c59d5f] italic drop-shadow-lg">
                {slide.title}
              </h1>

              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-4 justify-center z-10 relative">
                <a
                  href="/contact"
                  className="bg-[#c59d5f] hover:bg-white hover:text-black text-black px-8 py-3 rounded-lg font-semibold transition shadow-lg"
                >
                  Book Now
                </a>

                <a
                  href="/accommodation"
                  className="border border-[#c59d5f] text-[#c59d5f] hover:bg-[#c59d5f] hover:text-black px-8 py-3 rounded-lg font-semibold transition backdrop-blur-sm"
                >
                  View Rooms
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full ${
                current === idx ? "bg-[#c59d5f]" : "bg-gray-400"
              } transition`}
            ></button>
          ))}
        </div>
      </section>

      {/* Check Availability Form */}
      <section
        className="py-12"
        style={{ background: "linear-gradient(135deg, #1e170c 0%, #2e2004 50%)" }}
      >
        <form
          onSubmit={handleCheckAvailability}
          className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row gap-4 items-center max-w-4xl mx-auto w-full"
        >
          <div className="flex flex-col md:flex-1 w-full">
            <label htmlFor="fromDate" className="text-white font-semibold mb-1">
              From:
            </label>
            <input
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border border-white/50 rounded-lg px-4 py-2 w-full bg-white/10 text-white"
              required
            />
          </div>

          <div className="flex flex-col md:flex-1 w-full">
            <label htmlFor="toDate" className="text-white font-semibold mb-1">
              To:
            </label>
            <input
              type="date"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border border-white/50 rounded-lg px-4 py-2 w-full bg-white/10 text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#c59d5f] text-black px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition w-full md:w-auto"
          >
            Check Availability
          </button>
        </form>
      </section>

      <style jsx>{`
        @keyframes zoomInOut {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-zoom-in-out {
          animation: zoomInOut 12s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
