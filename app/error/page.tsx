"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/shared/icons";

export default function Error() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Image
        src="/_static/illustrations/rocket-crashed.svg"
        alt="404"
        width={400}
        height={400}
        className="pointer-events-none mb-5 mt-6 dark:invert"
      />

      <Suspense fallback={<Skeleton className="size-full rounded-lg" />}>
        <ErrorJson />
      </Suspense>

      <div className="flex gap-2">
        <Link
          href={".."}
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <Icons.chevronLeft className="mr-2 size-4" />
          Back
        </Link>
        <Link
          href={"/"}
          className={cn(
            "flex items-center",
            buttonVariants({ variant: "default" }),
          )}
        >
          Return to home
        </Link>
      </div>
    </div>
  );
}

function ErrorJson() {
  const searchParams = useSearchParams();
  const error = Object.fromEntries(searchParams.entries());

  return (
    <>
      <h1 className="text-center font-extrabold">Something went wrong!</h1>
      {Object.keys(error).length > 0 && (
        <pre className="rounded-lg bg-muted/30 p-3">
          {JSON.stringify(error, null, 2)}
        </pre>
      )}
    </>
  );
}
