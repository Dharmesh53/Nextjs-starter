"use client";

import { useState } from "react";
import Link from "next/link";
import { UserRole } from "@prisma/client";

import { useCurrentUser } from "@/hooks/use-current-user";
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

export function UserAccountNav() {
  const { user } = useCurrentUser();

  const [open, setOpen] = useState(false);

  const { isMobile } = useMediaQuery();

  if (!user) {
    return (
      <div className="size-8 animate-pulse rounded-full border bg-muted" />
    );
  }

  if (!isMobile) {
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
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user?.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />

        {user.role === UserRole.ADMIN ? (
          <DropdownMenuItem asChild>
            <Link href="/admin" className="flex items-center space-x-2.5">
              <Icons.lock className="size-4" />
              <p className="text-sm">Admin</p>
            </Link>
          </DropdownMenuItem>
        ) : null}

        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center space-x-2.5">
            <Icons.layoutDashboard className="size-4" />
            <p className="text-sm">Dashboard</p>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2.5"
          >
            <Icons.settings className="size-4" />
            <p className="text-sm">Settings</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
          }}
        >
          <div className="flex items-center space-x-2.5">
            <Icons.logOut className="size-4" />
            <p className="text-sm">Log out </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
