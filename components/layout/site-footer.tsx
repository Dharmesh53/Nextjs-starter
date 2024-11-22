import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";

import { Icons } from "../shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="border-t px-4 py-1">
        <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row">
          <span className="text-sm text-muted-foreground">
            Copyright &copy; 2024. All rights reserved.
          </span>
          <p className="text-sm text-muted-foreground">
            Built by{" "}
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Dharmesh
            </Link>
            . Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
            .
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.gitHub className="size-5" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
