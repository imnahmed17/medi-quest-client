import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
    const user = true;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {};

    return (
        <div className='px-4 bg-white'>
            <nav className='relative w-full flex justify-between items-center'>
                <Link to='/'>
                    <img className='size-36' src='/logo.png' alt='' />
                </Link>
                <ul className='space-x-8 hidden lg:block'>
                    <NavLink to='/supplies' className={({ isActive }) => (isActive ? 'active' : 'default')} end>
                        All Supplies
                    </NavLink>
                    {
                        user && (
                            <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Dashboard
                            </NavLink>
                        )
                    }
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        About Us
                    </NavLink>
                </ul>
                {/* Small Screen Navbar */}
                <div className='lg:hidden'>
                    <div className='flex items-center'>
                        <button aria-label='Open Menu' title='Open Menu' onClick={() => setIsMenuOpen(true)}>
                            <svg className='size-6 text-gray-600' fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
                            </svg>
                        </button>
                    </div>
                    {
                        isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    <div className='flex items-center justify-between'>
                                        <Link to='/'>
                                            <img className='size-36' src='/logo.png' alt='' />
                                        </Link>
                                        <button aria-label='Open Menu' title='Open Menu' onClick={() => setIsMenuOpen(false)}>
                                            <svg className='size-6 text-gray-600' fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <nav>
                                        <ul className='space-y-3'>
                                            <li>
                                                <NavLink to='/supplies' className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                                    All Supplies
                                                </NavLink>
                                            </li>
                                            {
                                                user && (
                                                    <li>
                                                        <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                                            Dashboard
                                                        </NavLink>
                                                    </li>
                                                )
                                            }
                                            <li>
                                                <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                                    About Us
                                                </NavLink>
                                            </li>
                                            {
                                                user ? (
                                                    <li>
                                                        <button onClick={handleLogout} className='default'>Logout</button>
                                                    </li>
                                                ) : (
                                                    <li>
                                                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                                            Login
                                                        </NavLink>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='hidden lg:block'>
                    {
                        user ? <>
                            <button onClick={handleLogout} className='default'>Logout</button>
                        </>
                        : <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Login
                        </NavLink>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;