import Google from 'next-auth/providers/google';
import Kakao from 'next-auth/providers/kakao';
import Github from 'next-auth/providers/github';
import { CredentialsSignin, type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { verifyPassword } from './lib/password';
import db from './lib/db';

export default {
    providers: [
        Google,
        Kakao,
        Github,
        Credentials({
            credentials: {
                email: {
                    type: 'text',
                },
                password: {
                    type: 'password',
                },
            },
            authorize: async ({ email, password }) => {
                if (!email || !password)
                    throw new CredentialsSignin(
                        'Please enter your email and password'
                    );
                const user = await db.user.findFirst({
                    where: {
                        email,
                    },
                });
                if (!user) throw new CredentialsSignin('User not found');
                const isValid = verifyPassword(
                    password as string,
                    user.password!
                );
                if (!isValid) throw new CredentialsSignin('Invalid password');

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                };
            },
        }),
    ],
} satisfies NextAuthConfig;
