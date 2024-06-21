'use server';
import db from '@/utils/db';
import { saltAndHashPassword } from '@/utils/password';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(5),
});

export const createUser = async (data: FormData) => {
    const validationFields = schema.safeParse({
        email: data.get('email'),
        password: data.get('password'),
    });

    if (!validationFields.success) {
        return {
            errors: validationFields.error,
        };
    }
    const { email, password } = validationFields.data;
    const hashPassword = saltAndHashPassword(password);
    const isExist = await db.user.findFirst({
        where: {
            email,
        },
    });
    if (isExist) {
        return {
            errors: 'Already exist user',
        };
    }

    const user = await db.user.create({
        data: {
            email,
            password: hashPassword,
        },
    });
    if (user) {
        redirect('/signIn');
    }
};
