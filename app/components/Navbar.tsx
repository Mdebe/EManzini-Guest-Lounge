"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const phone = "+27 72 624 8177";
  const email = "info@emanziniguestlounge.co.za";
  const address = "Mtubatuba, KwaZulu-Natal, South Africa";

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" onClick={handleMobileLinkClick}>
          <div className="flex items-center cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="EManzini Guest Lounge & Accommodation"
              width={320}
              height={140}
              className="object-contain max-h-24 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center text-[#c59d5f] text-lg font-medium">
          <li><Link href="/" className="hover:text-white transition italic">Home</Link></li>
          
          <li><Link href="/accommodation" className="hover:text-white transition italic">Accommodation</Link></li>
          <li><Link href="/lounge-events" className="hover:text-white transition italic">Lounge & Events</Link></li>
          <li><Link href="/gallery" className="hover:text-white transition italic">Gallery</Link></li>
           

          {/* Book Now Button */}
          <li>
            <Link
              href="/contact"
              className="ml-6 bg-[#c59d5f] hover:bg-white hover:text-black text-black px-6 py-2 rounded-lg transition text-sm font-semibold not-italic"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-7 h-7 text-[#c59d5f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black px-8 py-6 space-y-5 text-[#c59d5f] text-lg font-medium">
          <li><Link href="/" onClick={handleMobileLinkClick} className="italic">Home</Link></li>
          <li><Link href="/about" onClick={handleMobileLinkClick} className="italic">About</Link></li>
          <li><Link href="/accommodation" onClick={handleMobileLinkClick} className="italic">Accommodation</Link></li>
          <li><Link href="/lounge-events" onClick={handleMobileLinkClick} className="italic">Lounge & Events</Link></li>
          <li><Link href="/gallery" onClick={handleMobileLinkClick} className="italic">Gallery</Link></li>
          <li><Link href="/contact" onClick={handleMobileLinkClick} className="italic">Contact</Link></li>

          <li>
            <Link
              href="/contact"
              className="block bg-[#c59d5f] text-black px-6 py-3 rounded-lg text-center font-semibold not-italic"
              onClick={handleMobileLinkClick}
            >
              Book Now
            </Link>
          </li>

          <li className="text-white text-sm not-italic">
            {address}
          </li>
        </ul>
      )}
    </nav>
  );
}
