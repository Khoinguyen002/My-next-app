import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const url = req.nextUrl;
  url.pathname = "/api/post/2";

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/secret-page"],
};
