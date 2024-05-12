import { Button } from '@/components/ui/button';
import { TSupply } from '@/types/supply.types';
import { Link } from 'react-router-dom';

const SupplyCard = ({ _id, title, category, image, amount }: TSupply) => {
    return (
        <div className='rounded-lg overflow-hidden shadow group'>
            <figure className='overflow-hidden border'>
                <img className='w-full h-60' src={image} alt={title} />
            </figure>
            <div className='my-3 px-3'>
                <h2>{title}</h2>
                <p className='mt-3 mb-2 w-fit px-3 pt-0.5 pb-1 rounded-full text-sm font-medium capitalize bg-slate-100'>{category}</p>
                <div className='flex items-center gap-1'>
                    <svg className='size-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z"/>
                    </svg>
                    <p className='font-medium'>{amount}.00</p>
                </div>
                <div className='mt-4 flex justify-end'>
                    <Button asChild className='bg-btn-gradient'>
                        <Link to={`/supplies/${_id}`}>View Details</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SupplyCard;