import { NextResponse } from 'next/server'

export async function middleware(request) {
    if (request.nextUrl.pathname == '/list') {
        console.log(new Date().toLocaleString())
        console.log(request.headers.get('sec-ch-ua-platform'))
        return NextResponse.next()
    }
} 