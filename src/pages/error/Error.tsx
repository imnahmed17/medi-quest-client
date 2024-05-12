import Lottie from 'lottie-react';
import { Link, useRouteError } from 'react-router-dom';
import errorJson from '../../assets/error-404.json';
import { Button } from '@/components/ui/button';

const Error = () => {
    const { error }: any = useRouteError();

    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <div className='flex justify-center'>
                    <Lottie animationData={errorJson} loop={true} className='h-[500px]' />
                </div>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <p className='text-error me-4'>{error?.message}</p>
                    <Button variant='destructive' asChild>
                        <Link to='/'>Back to homepage</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Error;