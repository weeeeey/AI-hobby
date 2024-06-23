'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export const loginAction = async (_: any, data: FormData) => {
    const loginBtn = data.get('loginBtn');

    let success = false;
    if (loginBtn) {
        try {
            if (!data.get('email') || !data.get('password')) {
                return {
                    error: '아이디 또는 비밀번호를 입력해주세요.',
                };
            }
            await signIn('credentials', {
                email: data.get('email') as string,
                password: data.get('password') as string,
                redirect: false,
            });

            success = true;
        } catch (error) {
            if (error instanceof AuthError) {
                switch (error.cause?.provider) {
                    case 'credentials':
                        return {
                            error: '아이디 또는 비밀번호가 잘못 되었습니다.',
                        };
                    default:
                        return { error: 'Something went wrong' };
                }
            }
        }
        if (success) {
            return {
                success: true,
            };
        }
    }
};
