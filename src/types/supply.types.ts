export type TSupply = {
    _id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    amount: number;
};

export type TSupplyProps = {
    index: number;
    supply: TSupply;
};

export type TSupplyStats = {
    category: string;
    count: number;
};