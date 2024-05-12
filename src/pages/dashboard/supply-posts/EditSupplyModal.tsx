import { Button } from '@/components/ui/button';
import { 
    Dialog, 
    DialogClose, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUpdateSupplyMutation } from '@/redux/api/api';
import { TSupply } from '@/types/supply.types';
import { FormEvent, useState } from 'react';

const EditSupplyModal = ({ _id, title, category, amount }: TSupply) => {
    const [supplyTitle, setSupplyTitle] = useState(title);
    const [supplyCategory, setSupplyCategory] = useState(category);
    const [supplyAmount, setSupplyAmount] = useState(amount);
    const [updateSupply] = useUpdateSupplyMutation();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const supplyDetails = { 
            title: supplyTitle, 
            category: supplyCategory,
            amount: supplyAmount
        };

        const options = {
            id: _id,
            data: supplyDetails
        };

        updateSupply(options);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-[#5C53FE]'>
                    <svg 
                        className='size-5'
                        fill="none" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg" 
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        ></path>
                    </svg>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Supply Post</DialogTitle>
                    <DialogDescription>
                        Edit supply post that you want to update.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input 
                                defaultValue={supplyTitle} 
                                onChange={(e) => setSupplyTitle(e.target.value)} 
                                id="title" 
                                className="col-span-3" 
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="category" className="text-right">
                                Category
                            </Label>
                            <Input 
                                defaultValue={supplyCategory} 
                                onChange={(e) => setSupplyCategory(e.target.value)} 
                                id="category" 
                                className="col-span-3" 
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="amount" className="text-right">
                                Amount
                            </Label>
                            <Input 
                                defaultValue={supplyAmount} 
                                onChange={(e) => setSupplyAmount(parseInt(e.target.value))} 
                                id="amount" 
                                className="col-span-3" 
                                type="number"
                            />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditSupplyModal;