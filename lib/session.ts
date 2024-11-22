import { cache } from "react";
import { auth } from "@/auth";
import { User } from "@prisma/client";

export const getCurrentUser = cache(async () => {
  const session = await auth();

  return session?.user as Partial<User>;
});
