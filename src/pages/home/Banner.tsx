import { Button } from '@/components/ui/button';

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center w-full'>
            <div className='w-full lg:w-1/2'>
                <div className='flex items-center gap-4 mb-8'>
                    <svg className='size-6 text-[#2785A9]' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"></path>
                        <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"></path>
                    </svg>
                    <h2 className='text-[#52C6DA]'>Healthcare</h2>
                </div>
                <div className='lg:max-w-xl'>
                    <h1 className='text-5xl font-semibold mb-8'>An end-to-end visibility platform for healthcare products</h1>
                    <h3 className='tracking-wider mb-8'>Simple, seamless location tracking for healthcare and medical device products. Never lose sight of your critical inventory, orders, or loans, again.</h3>
                    <Button className='bg-btn-gradient w-40 group flex gap-2'>
                        <span className='group-hover:-ml-0.5 transition-all'>Explore more</span>
                        <svg className='mt-1 group-hover:ml-[18px] transition-all' width="23" height="7" viewBox="0 0 23 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6463 2.29939H4.21951C3.54878 2.29939 3 2.74939 3 3.29939C3 3.84939 3.54878 4.29939 4.21951 4.29939H17.6463V6.08939C17.6463 6.53939 18.3049 6.75939 18.6829 6.43939L22.0732 3.64939C22.3049 3.44939 22.3049 3.13939 22.0732 2.93939L18.6829 0.149395C18.3049 -0.170605 17.6463 0.0593946 17.6463 0.499395V2.29939Z" fill="#F7F9FC"></path>
                            <circle cx="1" cy="3.39001" r="1" fill="#F7F9FC"></circle>
                        </svg>
                    </Button>
                </div>
            </div>
            <div className='w-full lg:w-1/2 relative'>
                <img className='object-cover w-full overflow-visible' src='https://assets-global.website-files.com/6417a02d5a82ab2876427926/6426f8d2eabc9b19051d8639_2_Industries-Healthcare-Master_FINAL.png' loading='lazy' alt='banner-logo' />
                <img className='absolute -top-12 right-0 -z-10 rotate-180 w-4/5 object-cover' src='https://assets-global.website-files.com/6417a02d5a82ab2876427926/641a72a8ff59243fdda23b91_Subtract.svg' loading='lazy' alt=''></img>
            </div>
        </div>
    );
};

export default Banner;