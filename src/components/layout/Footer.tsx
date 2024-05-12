import React from 'react';

const Footer = () => {
    return (
        <div className='bg-lime-100 px-6'>
            <footer className='w-full flex flex-col lg:flex-row gap-10'>
                <div className='lg:w-1/5'>
                    <img className='size-60' src="/logo.png" alt="" />
                    <p className='-mt-8'>Medi Quest Ltd. <br /> Providing reliable services since 2021.</p>
                </div>
                <div className='lg:w-4/5'>
                    <div className='lg:mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4'>
                        <div>
                            <h3 className="mb-2 font-medium uppercase">Services</h3> 
                            <p className="cursor-pointer">Branding</p> 
                            <p className="cursor-pointer">Design</p> 
                            <p className="cursor-pointer">Marketing</p> 
                            <p className="cursor-pointer">Advertisement</p>
                        </div> 
                        <div>
                            <h3 className="mb-2 font-medium uppercase">Company</h3> 
                            <p className="cursor-pointer">About us</p> 
                            <p className="cursor-pointer">Jobs</p> 
                            <p className="cursor-pointer">Press kit</p>
                            <p className="cursor-pointer">Developers</p>
                        </div> 
                        <div>
                            <h3 className="mb-2 font-medium uppercase">Social Media</h3> 
                            <p className="cursor-pointer">Facebook</p> 
                            <p className="cursor-pointer">Twitter</p> 
                            <p className="cursor-pointer">Instagram</p>
                            <p className="cursor-pointer">LinkedIn</p>
                        </div> 
                        <div>
                            <h3 className="mb-2 font-medium uppercase">Contact Us</h3> 
                            <p className="cursor-pointer">123 south lane, East Berne</p> 
                            <p className="cursor-pointer">555-555-5555</p>
                            <p className="cursor-pointer">mediquest@info.com</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='mt-4 bg-lime-500 p-[0.5px]'></div>
            <div className='p-4 text-center'>
                <p>Copyright © 2024 - All right reserved by Medi Quest Ltd.</p>
            </div>
        </div>
    );
};

export default Footer;