'use client';

import { useFormState } from 'react-dom';
import { sign } from '../_action/sign';
import { SignBtn } from './sign-btn';

const ActionForm = () => {
    const [state, action] = useFormState(sign, null);
    return (
        <>
            <form className="flex flex-col" action={action}>
                <input
                    name="email"
                    className="border"
                    placeholder="id"
                    type="text"
                    required
                />
                <input
                    name="password"
                    className="border"
                    placeholder="password"
                    type="password"
                    required
                />
                <div
                    className={`${state?.error ? 'h-5' : 'h-0'} transition-all`}
                >
                    {state?.error}
                </div>
                <button
                    className="bg-black text-white px-4 py-1"
                    name="loginBtn"
                    type="submit"
                    value="login"
                >
                    로그인
                </button>
            </form>
            <form className="flex flex-col " action={action}>
                <SignBtn className="w-full bg-red-500" provider="google" />
                <SignBtn className="w-full bg-yellow-500" provider="kakao" />
            </form>
        </>
    );
};

export default ActionForm;
