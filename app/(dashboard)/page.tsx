'use client';

import { useModalStore } from '@/lib/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TEXT = '가나다라마바사차자카';
const LAST = 'l';
const DashboardPage = () => {
    const { onOpen } = useModalStore();
    return (
        <div className="h-full flex flex-col">
            <button onClick={() => onOpen('login')}>로그인</button>
            <button onClick={() => onOpen('logout')}>로그아웃</button>
        </div>
    );
};

export default DashboardPage;
