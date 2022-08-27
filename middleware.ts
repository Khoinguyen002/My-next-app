import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, res: NextResponse) {
    const url = req.url;
    
  return NextResponse.rewrite(`${url}about`)
}

export const config = {
  matcher: ['/'],
}