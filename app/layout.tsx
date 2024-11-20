import "./globals.css";

import React from "react";
import { fontGeist, fontHeading, fontSans, fontUrban } from "@/assets/fonts";

import { cn, constructMetadata } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";

import Providers from "./providers";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
          fontGeist.variable,
        )}
      >
        <Providers>
          {children}
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
