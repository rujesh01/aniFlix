import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="flex items-center justify-between w-full h-16 px-6">
        {/* Logo Section */}
        <section className="text-white font-bold text-3xl">
          <Link href={"/home"}>AniFlix</Link>
        </section>

        {/* Search Section */}
        <section className="flex flex-1 max-w-[500px] mx-3">
          <Input
            type="text"
            placeholder="Search..."
            aria-label="Search bar"
            className="w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </section>

        {/* Auth Section */}
        <section className="flex gap-4">
          <Button variant="outline" size="sm" className="text-white">
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" size="sm" className="text-white">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
