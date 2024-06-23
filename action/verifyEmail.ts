'use server';

import db from '@/lib/db';

export const verifyEmail = async (email: string) => {
    try {
        if (email.length === 0)
            return {
                type: 'client',
                message: '이메일을 입력해주세요.',
            };
        const isUser = await db.user.findFirst({
            where: {
                email,
            },
        });
        if (isUser) {
            return {
                type: 'client',
                message: '중복된 이메일입니다.',
            };
        }
        return {
            type: 'success',
            message: '사용 가능한 이메일입니다.',
        };
    } catch (error) {
        return {
            type: 'server',
            message: '서버 오류',
        };
    }
};
