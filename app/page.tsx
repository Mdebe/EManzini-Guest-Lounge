"use client";

import HeroSlider from "./components/HeroSlider";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Horizontal Carousel with arrows + auto-slide
function HorizontalCarousel({ images }: { images: string[] }) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () =>
    setScrollIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setScrollIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const childWidth = container.scrollWidth / images.length;
      container.scrollTo({
        left: scrollIndex * childWidth,
        behavior: "smooth",
      });
    }
  }, [scrollIndex, images.length]);

  return (
    <div className="py-10 px-6 max-w-6xl mx-auto relative">
      <h2 className="text-3xl md:text-4xl font-bold text-[#c59d5f] mb-8 text-center">
        Explore EManzini
      </h2>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-hidden scroll-smooth"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-64 md:w-72 lg:w-80 overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
          >
            <Image
              src={img}
              alt={`Gallery ${idx}`}
              width={320}
              height={200}
              className="w-full h-48 md:h-56 lg:h-60 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#c59d5f] text-black px-4 py-2 rounded-full font-bold hover:bg-white transition"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#c59d5f] text-black px-4 py-2 rounded-full font-bold hover:bg-white transition"
      >
        ▶
      </button>
    </div>
  );
}

export default function Home() {
  const gallerySlides = [
     "/images/g5.jpg",
    "/images/g4.jpg",
    "/images/g7.jpg",
    "/images/g9.jpg",
    "/images/g3.jpg",
    "/images/g1.jpg",
    "/images/g8.jpg",
   
  ];

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />
{/* About Section */}
<section
  id="about"
  className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
>
  {/* Text Content */}
  <div className="space-y-6 animate-fadeIn">
    <h2 className="text-4xl font-extrabold mb-2 text-[#c59d5f]">
      Welcome to EManzini Guest Lounge
    </h2>
    <p className="text-gray-800 leading-relaxed">
      EManzini Guest Lounge & Accommodation is your premier destination in
      Mtubatuba, KwaZulu-Natal. Enjoy luxurious rooms, a vibrant lounge,
      exceptional dining, and an unforgettable stay.
    </p>
    <p className="text-gray-700 leading-relaxed">
      We pride ourselves on quality hospitality, warm service, and attention
      to every detail. Our modern facilities and stylish ambiance make
      EManzini Guest Lounge a preferred choice for both leisure and business
      travelers.
    </p>
    <p className="mt-2 text-gray-700">
      <strong>Management:</strong>
      <br />
      Mr. Sipho Mdluli
      <br />
      Ms. Nomsa Zulu
    </p>

    {/* Buttons + Image Row */}
    <div className="flex flex-wrap items-center gap-4 mt-6">
      {/* Buttons */}
      <a
        href="tel:+27721234567"
        className="bg-[#c59d5f] text-black px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
      >
        Call Us
      </a>
      <a
        href="mailto:info@emanzini.co.za"
        className="bg-[#c59d5f] text-black px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
      >
        Email Us
      </a>
      <a
        href="/contact"
        className="bg-black text-[#c59d5f] px-6 py-3 rounded-xl font-semibold hover:bg-[#c59d5f] hover:text-black transition"
      >
        Book Now
      </a>

      
    </div>
  </div>

  {/* Main Team Image */}
<div>
  <img
    src="/images/emanzini-team.jpg"
    alt="EManzini Team"
    className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-64 md:h-80 object-cover"
  />
</div>

</section>

      {/* Horizontal Carousel */}
      <HorizontalCarousel images={gallerySlides} />

      {/* Rooms & Services */}
      <section
        id="services"
        className="py-20 px-6"
        style={{ background: "linear-gradient(to right, #15191a, #703c00)" }}
      >
        <h2 className="text-4xl font-bold text-center mb-14 text-[#c59d5f] animate-fadeIn">
          Our Rooms & Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Luxury Rooms", img: "/images/rooms.jpg" },
            { title: "Executive Suites", img: "/images/room2.jpg" },
            { title: "Lounge & Events", img: "/images/emanzini-lounge.jpg" },
            { title: "Bar & Entertainment", img: "/images/emanzini-bar.jpg" },
            { title: "Outdoor Spaces", img: "/images/emanzini-exterior.jpg" },
            { title: "Private Dining", img: "/images/room3.jpg" },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="w-full h-[150px] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-[#c59d5f]">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  Exceptional comfort and luxury for every guest.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
{/* Latest Events Section */}
<section
  id="events"
  className="py-20 px-6 max-w-6xl mx-auto"
  style={{ background: "linear-gradient(to right, #ffffff, #ffffff)" }}
>
  <h2 className="text-4xl font-bold text-[#c59d5f] text-center mb-12 animate-fadeIn">
    Latest Events
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {[
      {
        title: "Summer Lounge Party",
        date: "2026-01-15",
        image: "/images/g5.jpg",
      },
      {
        title: "Wine & Dine Night",
        date: "2026-02-02",
        image: "/images/g6.jpg",
      },
      {
        title: "Live Jazz Evening",
        date: "2026-02-10",
        image: "/images/g2.jpg",
      },
      {
        title: "Corporate Retreat",
        date: "2026-02-14",
        image: "/images/g00.jpg",
      },
    ].map((event) => (
      <div
        key={event.title}
        className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-[#c59d5f] mb-1">{event.title}</h3>
          <p className="text-sm text-white/80">{event.date}</p>
        </div>
      </div>
    ))}
  </div>
</section>


 {/* How to Book */}
{/* How to Book */}
<section
  className="relative py-24 px-6 bg-fixed bg-center bg-cover"
  style={{ backgroundImage: "url('/images/b5.jpg')" }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10">
    <h2 className="text-4xl font-bold text-center mb-14 text-[#c59d5f]">
      How to Book
    </h2>

    <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10 text-center">
      {[
        "1️⃣ Browse Rooms",
        "2️⃣ Select Dates",
        "3️⃣ Confirm Booking",
        "4️⃣ Enjoy Your Stay",
      ].map((step, index) => (
        <div key={index} className="group [perspective:1000px]">
          <div className="relative h-40 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

            {/* Front */}
            <div className="absolute inset-0 bg-white text-gray-800 p-6 rounded-2xl shadow-2xl flex items-center justify-center [backface-visibility:hidden]">
              <p className="font-semibold">{step}</p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 bg-[#c59d5f] text-black p-6 rounded-2xl shadow-2xl flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <a
                href="/contact"
                className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Book Now
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      

       
      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(to right, #000000, #373102)" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-[#c59d5f] animate-fadeIn">
          Ready to Book Your Stay?
        </h2>
        <a
          href="/contact"
          className="bg-[#c59d5f] text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-white hover:text-black transition-all duration-500"
        >
          Book Now
        </a>
      </section>
    </>
  );
}
