import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from '../ui/Container';

const MainLayout = () => {
    return (
        <>
            <Container>
                <Navbar />
                <div className='min-h-[calc(100vh-145px)]'>
                    <Outlet />
                </div>
            </Container>
            <Footer />
            <ScrollRestoration />
        </>
    );
};

export default MainLayout;