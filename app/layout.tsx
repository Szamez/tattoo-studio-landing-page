import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOIR INK Studio | Premium Tattoo Studio",
  description:
    "Dark, elegant, bilingual landing page for a premium tattoo studio with portfolio, artists, pricing and consultation booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
