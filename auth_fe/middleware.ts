"use client";

import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const user = "ll";

  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/private"],
};
