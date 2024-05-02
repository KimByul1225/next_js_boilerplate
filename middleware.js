import { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";

export async function middleware(request) {

    if (request.nextUrl.pathname.startsWith('/write')) {
        const session = await getToken({ req: request })
        console.log('세션', session)
        if (session == null) {
            return NextResponse.redirect(new URL('/api/auth/signin', request.url));
        }
    }
} 