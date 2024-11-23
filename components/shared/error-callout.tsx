"use client";

import { useSearchParams } from "next/navigation";

import { Callout } from "./callout";

export function ErrorCallout() {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  return (
    <>
      {Object.keys(params).length > 0 && params?.error?.length > 0 && (
        <Callout type="error">
          <p>
            {params?.error === "OAuthAccountNotLinked" &&
              "Please try other method to Sign In"}
          </p>
        </Callout>
      )}
    </>
  );
}
