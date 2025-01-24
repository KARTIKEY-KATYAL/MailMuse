import React from "react";
import Image from "next/image"; // Import Image from next/image
import { Button } from "../ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="h-[10vh] bg-blue-600 flex items-center justify-between px-6 md:px-12 shadow-md noto-sans">
      {/* Logo and Title */}
      <Link href={"/"}>
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="logo" width={100} height={50} />
          <h1 className="text-white text-2xl font-bold">SmartDraft</h1>
        </div>
      </Link>

      {/* Call-to-Action Button */}
      <Button className="bg-white text-blue-600 px-4 py-2 rounded-full hover:scale-110  hover:bg-gray-100">
        Get Started
      </Button>
    </header>
  );
}

export default Header;
