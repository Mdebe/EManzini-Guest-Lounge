"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 text-white"
      style={{
        background: "linear-gradient(to right, #1e170c, #2e2004)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="/images/wd.png"
            alt="EManzini Guest Lounge"
            width={80}
            height={26}
          />

          <p className="text-gray-300 text-sm leading-relaxed">
            EManzini Guest Lounge & Accommodation is your premier destination in 
            Mtubatuba, KwaZulu-Natal. Experience comfort, elegance, and warm 
            hospitality in a vibrant and relaxing environment.
          </p>

          <Link
            href="/contact"
            className="bg-[#c59d5f] text-black px-5 py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-black transition"
          >
            Book Now
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#c59d5f]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#c59d5f] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[#c59d5f] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/accommodation" className="hover:text-[#c59d5f] transition">
                Accommodation
              </Link>
            </li>
            <li>
              <Link href="#events" className="hover:text-[#c59d5f] transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#c59d5f] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#c59d5f]">
            Contact Us
          </h3>

          <p className="text-gray-300 text-sm mb-2">
            Mtubatuba, KwaZulu-Natal, South Africa
          </p>

          <p className="text-gray-300 text-sm mb-2">
            Tel: +27 72 123 4567
          </p>

          <p className="text-gray-300 text-sm mb-2">
            Email: info@emanzini.co.za
          </p>

          <p className="text-gray-400 text-xs mt-4">
            Management:
            <br />
            Mr. Sipho Mdluli
            <br />
            Ms. Nomsa Zulu
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-[#c59d5f]/30 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} EManzini Guest Lounge & Accommodation. All rights reserved.
        </p>

        <p className="text-gray-500 text-xs mt-2">
          Developed by{" "}
          <a
            href="https://mfundo-dev.web.app/"
            className="underline hover:text-[#c59d5f]"
          >
            Mdebe
          </a>
        </p>
      </div>
    </footer>
  );
}
