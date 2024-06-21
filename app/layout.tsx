import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import ModalProvider from '@/provider/modal-provider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '나의 갠취',
    description: '개인의 취미를 위한 공간 with AI',
};
const pretendart = localFont({
    src: '../public/font/PretendardVariable.woff2',
    display: 'swap',
    weight: '45 920',
    variable: '--font-pretendard',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kr">
            <body className={cn(pretendart.variable, inter.className)}>
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
