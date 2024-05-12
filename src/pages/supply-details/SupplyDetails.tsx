import { useGetSupplyQuery } from '@/redux/api/api';
import { Loader2 } from 'lucide-react';
import { useParams } from 'react-router-dom';
import SupplyDonateModal from './SupplyDonateModal';

const SupplyDetails = () => {
    const supplyId = useParams();
    const { data: supply, isLoading } = useGetSupplyQuery(`${supplyId.id}`);
    
    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-[calc(100vh-240px)]">
                <Loader2 className="size-8 text-lime-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className='my-10 px-4 w-full flex flex-col lg:flex-row gap-10'>
            <figure className='lg:w-2/5 overflow-hidden'>
                <img className='w-full' src={`${supply.image}`} alt={`${supply.title}`} />
            </figure>
            <div className='lg:w-3/5'>
                <h1 className='mb-6 text-4xl'>{supply.title}</h1>
                <p className='mb-2 w-fit px-3 pt-0.5 pb-1 rounded-full text-sm font-medium capitalize bg-slate-100'>{supply.category}</p>
                <div className='mb-3 flex items-center gap-1'>
                    <svg className='size-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z"/>
                    </svg>
                    <p className='font-medium text-lg'>{supply.amount}.00</p>
                </div>
                <p className='mb-1 font-medium'>About this item:</p>
                <p>{supply.description}</p>
                <div className='mt-5'>
                    <SupplyDonateModal {...supply} />
                </div>
            </div>
        </div>
    );
};

export default SupplyDetails;