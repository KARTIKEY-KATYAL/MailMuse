import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      {/* Text Section */}
      <section className="h-screen bg-red-600 bg-cover bg-center bg-[url('/back.jpg')] px-10 md:px-28 lg:px-44 flex flex-col items-center justify-center text-center text-white">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          AI Powered <span className="text-yellow-300">Email Templates</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl lg:text-2xl max-w-3xl text-gray-200">
          Create stunning and effective email templates in seconds. Let AI do
          the hard work while you focus on building better connections.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-yellow-300 text-red-600 font-bold hover:text-white transition-all hover:bg-green-600 text-lg rounded-full hover:scale-110 shadow-md duration-300">
            Try Demo
          </button>
          <button className="px-6 py-3 hover:bg-orange-600 hover:text-red-50 font-bold text-white transition-all bg-slate-500 text-lg rounded-full hover:scale-110 shadow-md duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Image Section */}
      <section className="h-screen flex items-center justify-center bg-white px-10">
        <Image
          src="/landing.png" // Correct path for public assets
          alt="Landing page illustration"
          width={1000}
          height={800}
          className="rounded-xl object-cover shadow-lg"
        />
      </section>
    </div>
  );
}

export default Hero;
