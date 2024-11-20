import "./globals.css";

import { fontGeist, fontHeading, fontSans, fontUrban } from "@/assets/fonts";

import { cn, constructMetadata } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";

import Providers from "./providers";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen w-full flex-col bg-background font-sans text-foreground antialiased",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
          fontGeist.variable,
        )}
      >
        <Providers>
          {children}
          <Toaster richColors closeButton />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
