import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth((req) => {
  if (req) {
    console.log(req);
  }
  return { providers: [GitHub] };
});
