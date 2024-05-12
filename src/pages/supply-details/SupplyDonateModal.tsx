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
import { useAddSupplyDonationMutation } from '@/redux/api/api';
import { TSupply } from '@/types/supply.types';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SupplyDonateModal = ({ _id, title, category, amount }: TSupply) => {
    const navigate = useNavigate();
    const [donarName, setDonarName] = useState('');
    const [donarEmail, setDonarEmail] = useState('');
    const [addSupplyDonation] = useAddSupplyDonationMutation();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const donationDetails = {
            name: donarName,
            email: donarEmail,
            supplyId: _id,
            supplyTitle: title,
            supplyCategory: category,
            supplyAmount: amount,
        };

        addSupplyDonation(donationDetails);
        navigate('/dashboard');
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">Donate Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Supply Donation</DialogTitle>
                    <DialogDescription>
                        Donate this supply for needy peoples.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input  
                                onChange={(e) => setDonarName(e.target.value)} 
                                id="name" 
                                className="col-span-3" 
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input  
                                onChange={(e) => setDonarEmail(e.target.value)} 
                                id="email" 
                                className="col-span-3" 
                            />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <DialogClose asChild>
                            <Button type="submit">Submit</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default SupplyDonateModal;