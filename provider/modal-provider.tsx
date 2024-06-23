import AuthModal from '@/components/modal/auth-modal';

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AuthModal />

            {children}
        </>
    );
};

export default ModalProvider;
