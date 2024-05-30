import type { Metadata } from "next";

// css
import "../style/index.css";

// metadata
export const metadata: Metadata = {
  title: "Mero HMS",
  description: "Mero HMS hotel management system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
