'use  client';
import { registerAction } from '@/action/register-action';
import { useModalStore } from '@/lib/store';
import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { verifyEmail } from '@/action/verifyEmail';
import { cn } from '@/lib/utils';

interface EmailError {
    type: '' | 'success' | 'client' | 'server';
    message: string;
}
const RegisterForm = () => {
    const { onOpen, onClose } = useModalStore();
    const [state, action] = useFormState(registerAction, null);
    const [emailError, setEmailError] = useState<EmailError>({
        type: '',
        message: '',
    });
    const [emailValue, setEmailValue] = useState('');

    const [passwordValue, setPasswordValue] = useState('');
    const [passwordError, setPasswordError] = useState('');
    useEffect(() => {
        if (state?.type === 'success') {
            onClose();
            setTimeout(() => {
                onOpen('login');
            }, 300);
        }
    }, [state, onOpen, onClose]);

    return (
        <form className="*:w-full space-y-6" action={action}>
            <div className="relative">
                <Input
                    required
                    type="email"
                    name="email"
                    placeholder="이메일"
                    onChange={(e) => setEmailValue(e.target.value)}
                    className={cn(
                        'pr-20',
                        emailError.type === 'client' &&
                            'border-red-500 focus:ring-red-500'
                    )}
                />

                <div
                    className={cn(
                        'absolute top-1/2 -translate-y-1/2 right-20 text-white bg-green-500 transition-all rounded-full text-sm px-2',
                        emailError.type === 'success'
                            ? 'scale-100 rotate-0'
                            : 'scale-0 rotate-180'
                    )}
                >
                    v
                </div>
                <div
                    onClick={async () => {
                        const res = await verifyEmail(emailValue);
                        setEmailError(res as EmailError);
                    }}
                    className="bg-black hover:bg-black/80 text-white absolute top-1/2 right-2 -translate-y-1/2 px-2 py-1 text-sm rounded-md cursor-pointer"
                >
                    중복확인
                </div>
                {emailError.type === 'client' && (
                    <div className="absolute text-red-500 text-sm">
                        {emailError.message}
                    </div>
                )}
            </div>

            <Input required type="text" name="name" placeholder="이름" />
            <Input
                required
                type="password"
                name="password"
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="비밀번호"
            />
            <div className="relative">
                <Input
                    required
                    type="password"
                    name="passwordConfirm"
                    placeholder="비밀번호 확인"
                    className={cn(
                        passwordError && 'border-red-500 focus:ring-red-500 '
                    )}
                    onChange={(e) => {
                        if (e.target.value !== passwordValue)
                            setPasswordError('비밀번호가 일치하지 않습니다.');
                        else setPasswordError('');
                    }}
                />
                {passwordError && (
                    <div className="text-red-500 text-sm absolute">
                        {passwordError}
                    </div>
                )}
            </div>
            <Button
                disabled={emailError.type === 'client' || passwordError !== ''}
                type="submit"
            >
                Register
            </Button>
        </form>
    );
};

export default RegisterForm;
