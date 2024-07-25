'use client';
import {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { useModalStore } from '@/lib/store';
import { signOut } from 'next-auth/react';

const LogoutModal = () => {
    const { isOpen, modalType, onClose } = useModalStore();
    if (isOpen && modalType !== 'logout') return null;
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogOverlay />
            <DialogPortal>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>로그아웃</DialogTitle>
                        <DialogClose />
                    </DialogHeader>
                    <DialogDescription>
                        로그아웃 하시겠습니까?
                    </DialogDescription>
                    <DialogFooter>
                        <Button onClick={() => signOut()} variant="outline">
                            로그아웃
                        </Button>
                        <Button onClick={onClose} variant="outline">
                            취소
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
};

export default LogoutModal;
