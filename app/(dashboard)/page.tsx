'use client';
import { Button } from '@/components/ui/button';
import { useModalStore } from '@/lib/store';
import React from 'react';

const DashboardPage = () => {
    const { onOpen } = useModalStore();

    return (
        <div className=" h-[150vh]">
            <Button onClick={() => onOpen('login')}>로그인</Button>
            <Button onClick={() => onOpen('logout')}>로그아웃</Button>
            <Button onClick={() => onOpen('register')}>회원가입</Button>
            <div className="spin size-32 rounded-full border-blue-500 border-[20px] border-b-transparent" />
            <div className="line"></div>
        </div>
    );
};

export default DashboardPage;
