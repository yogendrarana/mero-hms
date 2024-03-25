import type { Metadata } from "next";
import { Inter } from "next/font/google";

// css
import "@merohms/styles/css/globals.css";

// font
const inter = Inter({ subsets: ["latin"] });

// metadata
export const metadata: Metadata = {
  title: "Mero HMS",
  description: "Mero HMS hotel management system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
