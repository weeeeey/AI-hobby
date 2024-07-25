import authConfig from './auth.config';
import NextAuth from 'next-auth';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth((req) => {});

// export const config = {
//     matcher: ['/((?!ss|api|_next/static|_next/image|favicon.ico).*)'],
// };
// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//     const session = await auth();
//     const aa = new URL(request.url);
//     if (session) {
//         return NextResponse.redirect(new URL('/ss', aa.origin));
//     }
//     return NextResponse.next();
// }

// See "Matching Paths" below to learn more
