"use client";

import { useState } from "react";
import Link from "next/link";
import { User, UserRole } from "@prisma/client";

import useMediaQuery from "@/hooks/use-media-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/shared/icons";
import { UserAvatar } from "@/components/shared/user-avatar";

export function UserAccountNav({ user }: { user: Partial<User> }) {
  const [open, setOpen] = useState(false);
  const { isMobile } = useMediaQuery();

  if (!user) {
    return (
      <div className="size-8 animate-pulse rounded-full border bg-muted" />
    );
  }

  if (isMobile) {
    // something for mobile
    return null;
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className="size-8 border"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            {user.name && (
              <p className="font-geist text-sm font-medium">{user.name}</p>
            )}
            {user.email && (
              <p className="w-[200px] truncate font-geist text-xs text-muted-foreground">
                {user?.email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        {user.role === UserRole.ADMIN && (
          <DropdownMenuItem asChild>
            <Link href="/admin" className="flex items-center space-x-2.5">
              <Icons.lock className="size-4" />
              <span className="text-sm">Admin</span>
            </Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center space-x-2.5">
            <Icons.layoutDashboard className="size-4" />
            <span className="text-sm">Dashboard</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2.5"
          >
            <Icons.settings className="size-4" />
            <span className="text-sm">Settings</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
          }}
          asChild
        >
          <button className="flex items-center space-x-2.5">
            <Icons.logOut className="size-4" />
            <span className="text-sm">Log out </span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
