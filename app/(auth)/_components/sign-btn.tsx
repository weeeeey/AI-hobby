'use client';

import { useFormStatus } from 'react-dom';

interface SignBtnProps {
    provider: 'google' | 'kakao' | 'github';
    className?: string;
}

export const SignBtn = ({ provider, className }: SignBtnProps) => {
    const { pending } = useFormStatus();
    return (
        <button
            className={`${className} first-letter:uppercase disabled:bg-gray-400 disabled:cursor-not-allowed`}
            name={`${provider}Btn`}
            type="submit"
            value={provider}
            disabled={pending}
        >
            {provider}
        </button>
    );
};
