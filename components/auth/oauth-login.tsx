import React from 'react';
import { Button } from '../ui/button';
import oauthAction from '@/action/oauth-action';

const OauthLogin = () => {
    return (
        <form
            action={oauthAction}
            className="flex flex-col items-center justify-center space-y-2 *:w-full "
        >
            <OauthBtn provider="google" />
            <OauthBtn provider="github" />
            <OauthBtn provider="kakao" />
        </form>
    );
};

const OauthBtn = ({ provider }: { provider: string }) => {
    return (
        <Button
            className="first-letter:uppercase"
            name={`${provider}Btn`}
            value={provider}
            variant="outline"
        >
            {provider}
        </Button>
    );
};

export default OauthLogin;
