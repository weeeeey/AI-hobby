'use server';

import { signIn } from '@/auth';

const oauthAction = async (data: FormData) => {
    const provider =
        data.get('googleBtn') || data.get('kakaoBtn') || data.get('githubBtn');

    if (provider) {
        await signIn(provider as string, { redirectTo: '/' });
    }
};

export default oauthAction;
