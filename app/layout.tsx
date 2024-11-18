import type { Metadata } from "next";

import "./globals.css";

import React from "react";
import { inter } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Starter",
  description: "Start Now",
};

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen w-full flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
