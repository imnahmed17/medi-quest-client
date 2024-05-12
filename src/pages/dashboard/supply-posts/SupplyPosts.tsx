import { useGetAllSuppliesQuery } from '@/redux/api/api';
import SupplyPostCard from './SupplyPostCard';
import { TSupply } from '@/types/supply.types';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SupplyPosts = () => {
    const { data: supplies, isLoading } = useGetAllSuppliesQuery("");

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-[calc(100vh-80px)]">
                <Loader2 className="size-8 text-lime-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="mx-auto px-4 sm:px-8">
            <div className="flex justify-center">
                <Button asChild className="bg-lime-600 hover:bg-lime-700">
                    <Link to="/dashboard/create-supply">Add Supply Post</Link>
                </Button>
            </div>
            <div className="">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 bg-lime-600 text-white text-left uppercase font-medium">
                                        #
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-lime-600 text-white text-left uppercase font-medium">
                                        Title
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-lime-600 text-white text-left uppercase font-medium">
                                        Category
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-lime-600 text-white text-center uppercase font-medium">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-5 py-3 bg-lime-600 text-white text-center uppercase font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {supplies.data.map((supply: TSupply, index: number) => (
                                    <SupplyPostCard key={supply._id} index={index} supply={supply} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplyPosts;