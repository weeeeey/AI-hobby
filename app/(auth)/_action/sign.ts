'use server';
import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export const sign = async (_: any, data: FormData) => {
    const currentUser = await auth();
    if (currentUser) {
        redirect('/');
    }
    const provider = data.get('googleBtn') || data.get('kakaoBtn');

    if (provider) await signIn(provider as string, { redirectTo: '/signIn' });
    const loginBtn = data.get('loginBtn');
    if (loginBtn) {
        let success = false;
        try {
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
        if (success) redirect('/');
    }
};
