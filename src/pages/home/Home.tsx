import { useGetAllSuppliesQuery } from "@/redux/api/api";
import { TSupply } from "@/types/supply.types";
import { Loader2 } from "lucide-react";
import Banner from "./Banner";
import SupplyCard from "../../components/ui/SupplyCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";
import '../../styles/Home.css';
import Testimonials from "./Testimonials";

const Home = () => {
    const { data: supplies, isLoading } = useGetAllSuppliesQuery("");

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-[calc(100vh-240px)]">
                <Loader2 className="size-8 text-lime-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="px-6">
            <Banner />
            <div className="mt-4 lg:mt-24">
                <img src="/medical-devices-chain.svg" alt="" />
            </div>
            <div className="mt-12">
                <SectionTitle title="Supplies" />
                <div className="mt-8 space-y-10 md:space-y-0 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
                    {supplies?.data.slice(0, 6).map((item: TSupply) => (
                        <SupplyCard key={item._id} {...item} />
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <Button asChild className="w-40 bg-btn-gradient">
                        <Link to="/supplies">View All</Link>
                    </Button>
                </div>
            </div>
            <Testimonials />
            <PhotoGallery />
        </div>
    );
};

export default Home;
