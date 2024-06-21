import { createUser } from '../_action/zodAction';

const SignUp = () => {
    const handleAction = async (data: FormData) => {
        'use server';
        const res = await createUser(data);
        console.log(res);
    };
    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <form action={handleAction}>
                <input className="border w-full" type="text" name="email" />
                <input
                    className="border w-full"
                    type="password"
                    name="password"
                />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default SignUp;
