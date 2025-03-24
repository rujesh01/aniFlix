"use client";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { id: 0, name: "Home", href: "/home" },
  { id: 1, name: "Movies", href: "/movie" },
  { id: 2, name: "TV Series", href: "/tv" },
  { id: 3, name: "Most Popular", href: "/most-popular" },
  { id: 4, name: "Top Airing", href: "/top-airing" },
];

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-4 py-5 md:px-8">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none md:hidden"
        >
          <div className="text-white font-bold text-lg md:hidden flex gap-2">
            <AlignJustify />
            <span>Menu</span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="bg-gray-800 md:hidden">
          {links.map((link) => {
            return (
              <ul
                key={link.id}
                className="flex  flex-col items-center space-y-6 pt-8 pb-4"
              >
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-2xl font-bold"
                >
                  {link.name}
                </Link>
              </ul>
            );
          })}
        </div>
      )}

      <div className="hidden md:flex justify-center space-x-10 pt-10 pb-8">
        {links.map((link) => {
          return (
            <ul key={link.id}>
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-black text-xl  cursor-pointer hover:text-gray-400"
              >
                {link.name}
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default LandingNavbar;
