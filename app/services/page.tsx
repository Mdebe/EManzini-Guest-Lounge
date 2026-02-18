"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



import Image from "next/image";

export default function Services() {
  const services = [
    { title: "Residential Cleaning", img: "/images/residential.jpeg" },
    { title: "Office & Commercial", img: "/images/office.jpg" },
    { title: "Deep Cleaning", img: "/images/deep-clean.jpeg" },
    { title: "Move-In / Move-Out", img: "/images/moveinn.jpeg" },
    { title: "Post-Construction Cleaning", img: "/images/constructionn.jpeg" },
    { title: "Carpet & Upholstery Cleaning", img: "/images/carpet.jpeg" },
  ];

  return (
    <>
       

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-14" style={{ color: "#1bb6ba" }}>
          Our Services
        </h1>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition duration-500 cursor-pointer overflow-hidden">
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
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#1bb6ba" }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">Professional cleaning service to keep your space spotless.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </>
  );
}
