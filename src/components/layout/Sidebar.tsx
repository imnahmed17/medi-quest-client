import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isMenuActive, setIsMenuActive] = useState(true);

    const handleLogOut = () => {};

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='px-2 bg-white flex items-center justify-between md:hidden'>
                <Link to='/'>
                    <img className='size-32' src='/logo.png' alt='' />
                </Link>
                <button aria-label='Open Menu' title='Open Menu' onClick={() => setIsMenuActive(!isMenuActive)}>
                    <svg className='size-6 text-gray-600' fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
                    </svg>
                </button>
            </div>
            {/* Sidebar */}
            <div className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-lime-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isMenuActive && '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out`}>
                <div>
                    {/* Branding & Profile Info */}
                    <Link to='/' className='w-full flex justify-center'>
                        <img className='size-36' src='/logo.png' alt='' />
                    </Link>
                    <div className='mt-4 pt-2 pb-3 flex flex-col items-center border-y border-lime-500 text-gray-800'>
                        <h4 className='font-medium'>
                            Abu Hayder Rony
                        </h4>
                        <p className='text-sm'>
                            abuhayderrony@gmail.com
                        </p>
                    </div>
                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            <NavLink
                                to='/dashboard'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-3 transition-colors duration-300 transform hover:bg-lime-200 hover:text-gray-800 
                                    ${isActive ? "bg-lime-200 text-gray-800" : "text-gray-600"}`
                                }
                                end
                            >
                                <svg className='size-6' fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                                </svg>
                                <span className="mx-4 font-medium">Home</span>
                            </NavLink>
                            <NavLink
                                to="/dashboard/supplies"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-3 mt-2 transition-colors duration-300 transform hover:bg-lime-200 hover:text-gray-800 
                                    ${isActive ? "bg-lime-200 text-gray-800" : "text-gray-600"}`
                                }
                            >
                                <svg className='size-6' fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"></path>
                                </svg>
                                <span className="mx-4 font-medium">Supply Posts</span>
                            </NavLink>
                            <NavLink
                                to='/dashboard/create-supply'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-3 mt-2 transition-colors duration-300 transform hover:bg-lime-200 hover:text-gray-800 
                                    ${isActive ? "bg-lime-200 text-gray-800" : "text-gray-600"}`
                                }
                            >
                                <svg className='size-6' fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
                                </svg>
                                <span className="mx-4 font-medium">Add Supply Post</span>
                            </NavLink>
                        </nav>
                    </div>
                </div>
                <div>
                    <div className='bg-lime-500 p-[0.5px]'></div>
                    <button onClick={handleLogOut} className='flex w-full items-center justify-center py-3 mt-4 text-gray-600 hover:bg-lime-200 hover:text-gray-800 transition-colors duration-300 transform'>
                        <svg className='size-6' fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"></path>
                        </svg>
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;