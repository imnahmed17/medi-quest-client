import Sidebar from '@/components/layout/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            <Sidebar />
            <div className='flex-1  md:ml-64'>
                <div className='p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;