import { LoginModal } from '@/components/modal/login-modal';

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <LoginModal />
            {children}
        </>
    );
};

export default ModalProvider;
