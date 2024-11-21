"use client";

import Link from "next/link";

import { landingConfig } from "@/config/landing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/use-current-user";
import useScroll from "@/hooks/use-scroll";

import { Icons } from "../shared/icons";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

interface NavbarProps {
  scroll?: boolean;
  large?: boolean;
}

export function Navbar({ scroll = false }: NavbarProps) {
  const scrolled = useScroll(50);
  const links = landingConfig.mainNav;
  const { user, status } = useCurrentUser();

  return (
    <header
      className={cn(
        "bg-backgound/60 sticky top-0 z-40 flex w-full justify-center backdrop-blur-xl transition-all",
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b",
      )}
    >
      <MaxWidthWrapper className="flex h-14 items-center justify-center gap-10 py-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-1.5">
            <Icons.logo />
            <span className="font-urban text-xl font-bold">
              {siteConfig.name}
            </span>
          </Link>

          {links && links.length > 0 && (
            <nav className="hidden gap-6 md:flex">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  prefetch={true}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {user ? (
            <Link
              href={user.role === "ADMIN" ? "/admin" : "/dashboard"}
              className="hidden md:block"
            >
              <Button
                className="gap-2 px-5"
                variant="default"
                size="sm"
                rounded="full"
              >
                <span>Dashboard</span>
              </Button>
            </Link>
          ) : status === "unauthenticated" ? (
            <Button
              className="hidden gap-2 px-5 md:flex"
              variant="default"
              size="sm"
              rounded="full"
              onClick={() => {}}
            >
              <span>Sign In</span>
              <Icons.arrowRight className="size-4" />
            </Button>
          ) : (
            <Skeleton className="hidden h-9 w-28 rounded-full lg:flex" />
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
