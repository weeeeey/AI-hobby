'use client';
import { useFormState } from 'react-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { loginAction } from '@/action/login-action';
import { useModalStore } from '@/lib/store';
import { useEffect } from 'react';

const SignIn = () => {
    const [state, action] = useFormState(loginAction, null);
    const { onClose } = useModalStore();
    useEffect(() => {
        if (state?.success) onClose();
    }, [state, onClose]);

    return (
        <form
            action={action}
            className="flex flex-col items-center justify-center space-y-6 *:w-full mt-5"
        >
            <Input name="email" placeholder="email" />
            <Input name="password" type="password" placeholder="password" />
            {state?.error && (
                <div className="text-red-500 text-sm">{state.error}</div>
            )}
            <Button name="loginBtn" value={'login'}>
                로그인
            </Button>
        </form>
    );
};

export default SignIn;
