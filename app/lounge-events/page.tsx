"use client";

import Image from "next/image";
import { useState } from "react";

const loungeEvents = [
  {
    id: 1,
    title: "Kuqondene omaqondana",
    date: "2026-03-05",
    description:
      "Here is what EManzini planned for you. Come with your loved ones — Partner, Family, Friend, even your Child can be your valentine.",
    image: "/images/g77.jpg",
    type: "Music",
  },
  {
    id: 2,
    title: "Wine Tasting Experience",
    date: "2026-03-12",
    description: "Sample exclusive wines with expert sommeliers.",
    image: "/images/event2.jpg",
    type: "Food & Drinks",
  },
  {
    id: 3,
    title: "DJ Night Party",
    date: "2026-03-19",
    description: "Dance the night away with the hottest DJs in town.",
    image: "/images/g6.jpg",
    type: "Music",
  },
  {
    id: 4,
    title: "Art & Networking Evening",
    date: "2026-03-25",
    description: "Meet local artists and enjoy an evening of networking.",
    image: "/images/event4.jpg",
    type: "Networking",
  },
];

export default function LoungeEventsPage() {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All"
      ? loungeEvents
      : loungeEvents.filter((event) => event.type === filter);

  const eventTypes = ["All", "Music", "Food & Drinks", "Networking"];

  return (
    <div className="min-h-screen bg-[#1a1408] text-white py-16 px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold italic text-[#c59d5f] mb-4">
          Lounge Events
        </h1>
        <p className="text-gray-200 text-lg max-w-3xl mx-auto">
          Experience the finest events at EManzini Guest Lounge. From live
          music to exclusive tastings and networking evenings, there’s always
          something happening.
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {eventTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              filter === type
                ? "bg-[#c59d5f] text-black"
                : "bg-black/50 text-white hover:bg-[#c59d5f] hover:text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-black/60 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition transform duration-500 cursor-pointer relative group flex flex-col"
          >
            {/* Event Image */}
            <div className="relative h-64 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Event Info */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#c59d5f] mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">{event.date}</p>
                <p className="text-gray-200 text-sm">{event.description}</p>
              </div>

              {/* Mobile Book Now */}
              <div className="mt-4 md:hidden">
                <button className="bg-[#c59d5f] text-black px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition w-full">
                  Book Now
                </button>
              </div>

              {/* Desktop Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 md:flex hidden">
                <button className="bg-[#c59d5f] text-black px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <p className="text-gray-300 mb-4">
          Don’t miss out on our latest events. Book your spot today!
        </p>
        <button className="bg-[#c59d5f] text-black px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition">
          Check Availability
        </button>
      </div>
    </div>
  );
}
