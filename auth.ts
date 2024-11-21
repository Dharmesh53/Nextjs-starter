import NextAuth from "next-auth";

import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/signin",
    error: "/error",
  },
  events: {},
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },

    async jwt({ token }) {
      return token;
    },

    async session({ token, session }) {
      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
