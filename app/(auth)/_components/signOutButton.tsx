import { signOut } from '@/auth';
import React from 'react';

export const SignOutBtn = () => {
    return (
        <form
            action={async () => {
                'use server';
                await signOut({
                    redirectTo: '/signIn',
                });
            }}
        >
            <button type="submit">Sign out</button>
        </form>
    );
};
