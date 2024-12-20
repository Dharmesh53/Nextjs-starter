/**
 * An array of routes that are accessible to public
 * These routes don't require authentication
 */
export const publicRoutes: string[] = ["/", "/error", "/verify/user"];

/**
 * An array of routes that are used for authentication
 * these routes will redirect user to default_login_redirect
 */
export const authRoutes: string[] = [
  "/signin",
  "/signup",
  "/verify/reset",
  "/verify/password",
];

/**
 * default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/";

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for authentication purposes
 * It is used just for the safety to never block any request by middleware with this prefix
 */
export const apiAuthPrefix: string = "/api/auth";
