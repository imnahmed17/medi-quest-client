import { useGetAllSuppliesQuery } from "@/redux/api/api";
import { Loader2 } from "lucide-react";
import { TSupply } from "@/types/supply.types";
import SupplyCard from "../../components/ui/SupplyCard";

const AllSupplies = () => {
    const { data: supplies, isLoading } = useGetAllSuppliesQuery("");

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-[calc(100vh-240px)]">
                <Loader2 className="size-8 text-lime-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="px-6 my-10">
            <div className="mt-10 space-y-10 md:space-y-0 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4">
                {supplies.data.map((item: TSupply) => (
                    <SupplyCard key={item._id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default AllSupplies;
