"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import SignInButtonComponent from "./SignInButtonComponent";
import { useUserDetail } from "@/app/provider";

function Header() {
  const { userDeatail, setuserDeatail } = useUserDetail();
  console.log(`header ${userDeatail}`);
  

  return (
    <header className="h-[10vh] bg-blue-600 bg-cover bg-center shadow-2xl flex items-center justify-between px-6 md:px-12 noto-sans">
      {/* Logo and Title */}
      <Link href="/">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={90}
            height={90}
            className="rounded-full"
          />
          <h1 className="text-white text-2xl font-bold">SmartDraft</h1>
        </div>
      </Link>

      {/* Authentication State Rendering */}
      <div>
        {userDeatail?.email ? (
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button className="bg-yellow-400 px-5 py-5 hover:scale-110 transition-all duration-300 hover:bg-orange-400  text-xl rounded-2xl font-bold">Dashboard</Button>
            </Link>
            <Image
              src={userDeatail.picture || "/default-avatar.png"} // Fallback avatar
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        ) : (
          <div className="bg-white text-blue-600 px-4 py-2 rounded-full hover:scale-110 transition-all font-bold hover:bg-gray-100 cursor-pointer">
            <SignInButtonComponent />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
