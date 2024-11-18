import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  console.log(url);
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
