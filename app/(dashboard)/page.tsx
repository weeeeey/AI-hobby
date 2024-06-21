'use client';
import { Button } from '@/components/ui/button';
import { useModalStore } from '@/lib/store';
import React from 'react';

const DashboardPage = () => {
    const { onOpen } = useModalStore();
    return (
        <div>
            <Button onClick={() => onOpen('login')}>오픈</Button>
        </div>
    );
};

export default DashboardPage;
