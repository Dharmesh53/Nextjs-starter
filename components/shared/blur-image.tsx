"use client";

import { ComponentProps, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export function BlurImage(props: ComponentProps<typeof Image>) {
  const [loading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        "duration-500 ease-in-out",
        loading ? "blur-sm" : "blur-0",
      )}
      onLoad={() => setLoading(false)}
    />
  );
}
