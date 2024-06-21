import authConfig from './auth.config';
import NextAuth from 'next-auth';

const { auth } = NextAuth(authConfig);

export default auth((req) => {});

export const config = {
    matcher: ['/signIn'],
};
