import { useGetSupplyDonationStatsQuery, useGetSupplyStatsQuery } from '@/redux/api/api';
import { TSupplyStats } from '@/types/supply.types';
import { Loader2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import DonationChart from './DonationChart';

const DashboardHome = () => {
    const { data: supplyChartData, isLoading } = useGetSupplyStatsQuery('');
    const { data: supplyDonationData } = useGetSupplyDonationStatsQuery('');

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    if (isLoading) {
        return (
            <div className='flex justify-center items-center w-full h-[calc(100vh-80px)]'>
                <Loader2 className='size-8 text-lime-500 animate-spin' />
            </div>
        );
    }

    return (
        <div className='mt-10 flex flex-col lg:flex-row gap-10'>
            <div className='w-full lg:w-1/2'>
                <h1 className='text-3xl font-semibold text-center'>Supply Statistics</h1>
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart width={400} height={400}>
                        <Legend />
                        <Pie
                            data={supplyChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="count"
                        >
                            {supplyChartData.map((entry: TSupplyStats, index: number) => (
                                <Cell name={entry.category} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='w-full lg:w-1/2'>
                <h1 className='text-3xl font-semibold text-center'>Donation Supply Statistics</h1>
                <DonationChart supplyDonationData={supplyDonationData} />
            </div>
        </div>
    );
};

export default DashboardHome;