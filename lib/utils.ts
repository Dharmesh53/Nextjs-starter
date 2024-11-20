import { Metadata } from "next";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/config/site";

export const throttle = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number,
) => {
  let inThrottle = false;

  return (...args: T) => {
    if (inThrottle === false) {
      func.call(this, ...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
};

export const debounce = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number,
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: ["Next.js", "React"],
    authors: [
      {
        name: "Dharmesh",
      },
    ],
    creator: "Dharmesh",
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: siteConfig.url,
      title,
      description,
      siteName: title,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Dharmesh177208",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
