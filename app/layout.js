import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], // Specify the subsets you need, e.g., "latin"
  variable: "--font-outfit", // Optional: for using CSS variables
  weight: ["400", "500", "700"], // Add the desired font weights
});

export const metadata = {
  title: "Mailmuse",
  description: "AI-based mail template generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}
