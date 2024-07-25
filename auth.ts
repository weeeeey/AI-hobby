import {} from 'next-auth/jwt';

import NextAuth, { CredentialsSignin, type User } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import db from './lib/db';

import authConfig from './auth.config';

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(db),

    session: {
        strategy: 'jwt',
    },

    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/signIn',
    },
    callbacks: {
        async jwt({ token, user, session }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id as string;
            const curDate = new Date();
            curDate.setMinutes(curDate.getMinutes() + 60);
            session.expires = curDate.toISOString() as Date & string;
            console.log(session);
            return session;
        },
    },
    ...authConfig,
});

declare module 'next-auth' {
    interface Session {
        error?: 'RefreshAccessTokenError';
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        access_token: string;
        expires_at: number;
        refresh_token: string;
        error?: 'RefreshAccessTokenError';
    }
}
