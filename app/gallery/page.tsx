"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/residential.jpeg",
    "/images/office.jpg",
    "/images/deep-clean.jpeg",
    "/images/team.jpeg",
    "/images/moveinn.jpeg",
    "/images/constructionn.jpeg",
  ];

  return (
    <>
      

      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-14" style={{ color: "#1bb6ba" }}>
          Gallery
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105"
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
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
      

      
    </>
  );
}
