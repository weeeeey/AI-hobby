'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useModalStore } from '@/lib/store';

import { Separator } from '../ui/separator';
import OauthLogin from '../auth/oauth-login';
import RegisterForm from '../auth/register';

function RegisterModal() {
    const { isOpen, onClose, modalType } = useModalStore();

    if (!isOpen || modalType !== 'register') return null;
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center">회원가입</DialogTitle>
                </DialogHeader>
                <RegisterForm />
                <Separator />
                <OauthLogin />
            </DialogContent>
        </Dialog>
    );
}
export default RegisterModal;
