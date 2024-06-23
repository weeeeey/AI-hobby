'use server';
import db from '@/lib/db';
import { saltAndHashPassword } from '@/lib/password';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email(),
    name: z.string().min(2),
    password: z.string().min(4),
});

export const registerAction = async (_: any, data: FormData) => {
    const validateData = schema.safeParse({
        email: data.get('email'),
        name: data.get('name'),
        password: data.get('password'),
    });

    if (!validateData.success) {
        console.log(validateData.error.flatten().fieldErrors);
        return {
            type: 'client',
            message: validateData.error.flatten().fieldErrors,
        };
    }
    try {
        const hashedPassword = saltAndHashPassword(validateData.data.password);
        const user = await db.user.create({
            data: {
                email: validateData.data.email,
                name: validateData.data.name,
                password: hashedPassword,
            },
        });
        if (!user) {
            return {
                type: 'client',
                message: '이미 사용중인 이메일입니다.',
            };
        }
        return {
            type: 'success',
            message: '회원가입 완료',
        };
    } catch (error) {
        return {
            type: 'server',
            message: '서버 오류',
        };
    }
};
