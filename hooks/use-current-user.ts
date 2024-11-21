import { useSession } from "next-auth/react";

export function useCurrentUser() {
  const session = useSession();

  return { user: session.data?.user, status: session.status };
}
