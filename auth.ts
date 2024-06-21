import NextAuth, { CredentialsSignin, type User } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import db from './utils/db';

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
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id as string;
            return session;
        },
    },
    ...authConfig,
});
