import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oviprime Limited | Skill Training, IT Consultancy & Software Development",
  description:
    "Oviprime Limited provides professional skill training, IT consultancy, and software development services for modern organisations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}