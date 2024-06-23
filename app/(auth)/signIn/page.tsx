import { auth } from '@/auth';
import { SignOutBtn } from '../_components/signOutButton';
import ActionForm from '../_components/action-form';

async function SignInPage() {
    const currentUser = await auth();

    if (currentUser) {
        console.log(currentUser);
        return (
            <div className="space-y-4">
                <div>Already signed in</div>
                <div>{JSON.stringify(currentUser)}</div>
                <SignOutBtn />
            </div>
        );
    }
    return <ActionForm />;
}

export default SignInPage;
