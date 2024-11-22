import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "db";
import NextAuth from "next-auth";

import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/signin",
    error: "/error",
  },
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV !== "production",
  ...authConfig,
  events: {},
  callbacks: {},
});
