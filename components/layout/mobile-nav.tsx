"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserRole } from "@prisma/client";

import { landingConfig } from "@/config/landing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/use-current-user";

import { Icons } from "../shared/icons";
import { ModeToggle } from "./mode-toggle";

export function NavMobile() {
  const { user } = useCurrentUser();
  const [open, setOpen] = useState(false);

  const links = landingConfig.mainNav;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed right-2 top-2.5 z-50 rounded-full p-2 transition-colors duration-200 hover:bg-muted focus:outline-none active:bg-muted md:hidden",
          open && "hover:bg-muted active:bg-muted",
        )}
      >
        {open ? (
          <Icons.close className="size-5 text-muted-foreground" />
        ) : (
          <Icons.menu className="size-5 text-muted-foreground" />
        )}
      </button>
      <nav
        className={cn(
          "fixed inset-0 z-20 hidden w-full overflow-auto bg-background px-5 py-16 lg:hidden",
          open && "block",
        )}
      >
        <ul className="grid divide-y divide-muted">
          {links &&
            links.length > 0 &&
            links.map((item, index) => (
              <li key={index} className="py-3">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex w-full font-medium capitalize"
                >
                  {item.title}
                </Link>
              </li>
            ))}

          {user ? (
            <>
              {user.role === UserRole.ADMIN ? (
                <li className="py-3">
                  <Link
                    href="/admin"
                    onClick={() => setOpen(false)}
                    className="flex w-full font-medium capitalize"
                  >
                    Admin
                  </Link>
                </li>
              ) : null}

              <li className="py-3">
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex w-full font-medium capitalize"
                >
                  Dashboard
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="py-3">
                <Link
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className="flex w-full font-medium capitalize"
                >
                  Login
                </Link>
              </li>

              <li className="py-3">
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="flex w-full font-medium capitalize"
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="mt-5 flex items-center justify-end space-x-4">
          <Link href={siteConfig.links.github} target="_blank">
            <Icons.gitHub className="size-6" />
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}
