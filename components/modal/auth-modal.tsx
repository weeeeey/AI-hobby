import LoginModal from './login-modal';
import LogoutModal from './logout-modal';
import RegisterModal from './register-modal';
import { auth } from '@/auth';

const AuthModal = async () => {
    const session = await auth();

    if (session) return <LogoutModal />;
    return (
        <>
            <LoginModal />
            <RegisterModal />
        </>
    );
};

export default AuthModal;
