import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type TInputs = {
    email: string
    password: string
}

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<TInputs>();
    const loading = false;

    const onSubmit = async (data: TInputs) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        console.log(userInfo);
    };

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-lime-50 text-gray-900'>
                    <div className="mb-8 text-center">
                        <p className="text-sm text-gray-400">Login to access your account</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" id="email" {...register('email', { required: true })} placeholder="Enter Your Email Here" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-400 bg-gray-200 text-gray-900" data-temp-mail-org="0" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm mb-2">Password</label>
                                <input type="password" id="password" {...register('password', { required: true, minLength: 5 })} placeholder="*******" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-400 bg-gray-200 text-gray-900" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="bg-lime-500 w-full rounded-md py-3 text-white">
                                {loading ? <Loader2 className="mr-2 size-6 animate-spin" /> : "Continue"}
                            </button>
                        </div>
                    </form>
                    <p className="mt-1 px-6 text-sm text-center text-gray-400">
                        Don&apos;t have an account yet?{" "}
                        <Link to="/register" className="hover:underline hover:text-lime-600 text-gray-600">
                            Register
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;