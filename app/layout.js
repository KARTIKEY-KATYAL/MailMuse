import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const outfit = Outfit({
  subsets: ["latin"], // Specifies the required subsets
  variable: "--font-outfit", // CSS variable for custom styling
  weight: ["400", "500", "700"], // Font weights for flexibility
});

export const metadata = {
  title: "SmartDraft",
  description: "AI-based email template generator",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head />
      <body className={`${outfit.variable} bg-gray-50 text-gray-900`}>
        {/* Wrapping children with the Provider */}
        
        <Provider>{children}</Provider>
        
      </body>
    </html>
  );
}


