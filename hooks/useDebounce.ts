'use client';

import { useEffect, useState } from 'react';

export const useDebounce = (inputValue: string) => {
    const [debounceValue, setDebounceValue] = useState<string>('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(inputValue);
        }, 1000);
        return () => clearTimeout(handler);
    }, [inputValue]);

    return debounceValue;
};
