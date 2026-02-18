"use client";

import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    name: "Standard Room",
    image: "/images/rooms.jpg",
    price: "From R750 / night",
    features: [
      "Queen Bed",
      "Air Conditioning",
      "Flat Screen TV",
      "Private Bathroom",
      "Free WiFi",
    ],
  },
  {
    name: "Deluxe Room",
    image: "/images/room2.jpg",
    price: "From R1 050 / night",
    features: [
      "King Bed",
      "Mini Bar",
      "Balcony View",
      "Luxury Bathroom",
      "Free WiFi",
    ],
  },
  {
    name: "Executive Suite",
    image: "/images/room3.jpg",
    price: "From R1 500 / night",
    features: [
      "King Bed",
      "Lounge Area",
      "Premium Bathroom",
      "Smart TV",
      "Breakfast Included",
    ],
  },
];

export default function AccommodationPage() {
  return (
    <div className="bg-[#1a1408] text-white">

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/emanzini-room.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold text-[#c59d5f] italic">
            Our Accommodation
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Experience comfort, elegance, and premium hospitality at EManzini Guest Lounge.
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-[#c59d5f] mb-14">
          Choose Your Perfect Stay
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-black/60 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition duration-500"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#c59d5f] mb-2">
                  {room.name}
                </h3>
                <p className="mb-4 font-semibold">{room.price}</p>

                <ul className="space-y-2 text-sm text-gray-300">
                  {room.features.map((feature) => (
                    <li key={feature}>✔ {feature}</li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-6 inline-block bg-[#c59d5f] text-black px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-6 bg-[#120e05]">
        <h2 className="text-4xl text-center font-bold text-[#c59d5f] mb-12">
          Guest Amenities
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            "Free Secure Parking",
            "Daily Housekeeping",
            "On-site Lounge & Bar",
            "24/7 Security",
            "Conference & Event Space",
            "Breakfast Available",
          ].map((item) => (
            <div
              key={item}
              className="bg-black/60 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-500"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-[#c59d5f] mb-14">
          Room Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "/images/b2.jpg",
            "/images/s3.jpg",
            "/images/s6.jpg",
          ].map((img) => (
            <div key={img} className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src={img}
                alt="Room"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-[#2e2004] to-[#1a1408]">
        <h2 className="text-4xl font-bold text-[#c59d5f] mb-6">
          Ready to Experience Luxury?
        </h2>
        <p className="mb-8 text-gray-300">
          Book your stay today and enjoy unforgettable hospitality.
        </p>

        <Link
          href="/availability"
          className="bg-[#c59d5f] text-black px-10 py-4 rounded-xl font-bold hover:bg-white transition"
        >
          Check Availability
        </Link>
      </section>
    </div>
  );
}
