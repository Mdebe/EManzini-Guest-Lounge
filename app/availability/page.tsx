"use client";

import { useState } from "react";
import Image from "next/image";

const demoRooms = [
  {
    id: 1,
    name: "Standard Room",
    image: "/images/room1.jpg",
    price: 750,
    available: true,
  },
  {
    id: 2,
    name: "Deluxe Room",
    image: "/images/room2.jpg",
    price: 1050,
    available: true,
  },
  {
    id: 3,
    name: "Executive Suite",
    image: "/images/room3.jpg",
    price: 1500,
    available: false,
  },
];

export default function CheckAvailabilityPage() {
  const [fromDate, setFromDate] = useState("2026-02-18");
  const [toDate, setToDate] = useState("2026-02-19");
  const [guests, setGuests] = useState(2);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // Calculate nights
  const calculateNights = () => {
    const start = new Date(fromDate);
    const end = new Date(toDate);
    const diff = end.getTime() - start.getTime();
    const nights = diff / (1000 * 60 * 60 * 24);
    return nights > 0 ? nights : 1;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowResults(false);

    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const handleBook = (room: any) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const confirmBooking = () => {
    setShowModal(false);
    setShowPayment(true);
  };

  const nights = calculateNights();

  return (
    <div className="bg-[#1a1408] min-h-screen text-white py-16 px-6">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#c59d5f] italic">
          Check Availability
        </h1>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="max-w-5xl mx-auto bg-black/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl grid md:grid-cols-4 gap-6 items-end"
      >
        <div>
          <label className="block mb-2 text-[#c59d5f]">From</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/30"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-[#c59d5f]">To</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/30"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-[#c59d5f]">Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/30"
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num} className="text-black">
                {num} Guest{num > 1 && "s"}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-[#c59d5f] text-black py-3 rounded-xl font-bold hover:bg-white transition"
        >
          Search
        </button>
      </form>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center mt-16">
          <div className="w-12 h-12 border-4 border-[#c59d5f] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-10">
          {demoRooms.map((room) => {
            const totalPrice = room.price * nights;

            return (
              <div
                key={room.id}
                className="bg-black/60 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition duration-500"
              >
                <div className="relative h-60">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#c59d5f]">
                    {room.name}
                  </h3>
                  <p className="mt-2">
                    R {room.price} / night
                  </p>
                  <p className="mt-2 font-bold">
                    {nights} Night(s) = R {totalPrice}
                  </p>

                  {room.available ? (
                    <button
                      onClick={() => handleBook(room)}
                      className="mt-6 w-full bg-[#c59d5f] text-black py-3 rounded-lg font-bold hover:bg-white transition"
                    >
                      Book Now
                    </button>
                  ) : (
                    <button
                      disabled
                      className="mt-6 w-full bg-gray-500 py-3 rounded-lg font-bold"
                    >
                      Not Available
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Booking Confirmation Modal */}
      {showModal && selectedRoom && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1f1609] p-8 rounded-2xl max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-[#c59d5f] mb-4">
              Confirm Booking
            </h2>
            <p>
              {selectedRoom.name}
            </p>
            <p className="mt-2 font-bold">
              Total: R {selectedRoom.price * nights}
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-600 py-3 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={confirmBooking}
                className="flex-1 bg-[#c59d5f] text-black py-3 rounded-lg font-bold"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stripe Payment Demo Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">
              Stripe Payment Demo
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Card Number"
                className="w-full p-3 border rounded"
              />
              <input
                placeholder="MM/YY"
                className="w-full p-3 border rounded"
              />
              <input
                placeholder="CVC"
                className="w-full p-3 border rounded"
              />
            </div>

            <button
              onClick={() => {
                setShowPayment(false);
                alert("Payment Successful (Demo Only)");
              }}
              className="mt-6 w-full bg-black text-white py-3 rounded-lg"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
