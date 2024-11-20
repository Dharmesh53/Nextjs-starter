import NextAuth from "next-auth";

import authConfig from "./auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((request) => {
  const url = request.nextUrl.clone();
  const isLoggedIn = Boolean(request.auth);

  const isApiAuthRoute = url.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(url.pathname);
  const isPublicRoute = publicRoutes.includes(url.pathname);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, url));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callback = url.pathname;
    if (url.search) {
      callback += url.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callback);

    return Response.redirect(
      new URL(`/auth/signin?callbackUrl=${encodedCallbackUrl}`, url),
    );
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
