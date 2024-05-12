import { Button } from '@/components/ui/button';
import { useRemoveSupplyMutation } from '@/redux/api/api';
import { TSupplyProps } from '@/types/supply.types';
import EditSupplyModal from './EditSupplyModal';
import Swal from 'sweetalert2';

const SupplyPostCard = ({ index, supply }: TSupplyProps) => {
    const [removeSupply] = useRemoveSupplyMutation();

    const handleRemoveSupply = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                removeSupply(id);
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your class has been deleted.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000
                });
            } 
        });
    };

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{supply.title}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap capitalize">{supply.category}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex justify-center items-center gap-1">
                    <svg className='size-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z"/>
                    </svg>
                    <p className="text-gray-900 whitespace-no-wrap">{supply.amount}.00</p>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex justify-center gap-3">
                    <Button onClick={() => handleRemoveSupply(supply._id)} variant="destructive">
                        <svg className='size-5' fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
                        </svg>
                    </Button>
                    <EditSupplyModal {...supply} />
                </div>
            </td>
        </tr>
    );
};

export default SupplyPostCard;