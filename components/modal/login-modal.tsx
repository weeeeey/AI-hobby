'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useModalStore } from '@/lib/store';
import SignIn from '../auth/sign-in';
import { Separator } from '../ui/separator';
import OauthLogin from '../auth/oauth-login';

export function LoginModal() {
    const { isOpen, onClose } = useModalStore();

    if (!isOpen) return null;
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center">로그인</DialogTitle>
                </DialogHeader>
                <SignIn />
                <Separator />
                <OauthLogin />
                <Separator />
                <DialogFooter className="flex justify-center items-center *:w-full *:rounded-none divide-x-2">
                    <Button variant="link">비밀번호 찾기</Button>
                    <Button variant="link">아이디 찾기</Button>
                    <Button variant="link">회원가입</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
