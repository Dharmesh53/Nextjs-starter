import NextAuth from "next-auth";

import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  events: {},
  callbacks: {
    async signIn({ user, account }) {
      console.log(user, account);
      return true;
    },

    async jwt({ token }) {
      console.log(token);
      return token;
    },

    async session({ token, session }) {
      console.log(token, session);
      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
