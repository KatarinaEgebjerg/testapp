import React, { useContext } from 'react';
import { ShopContext } from '../context/shopcontext';

const ProfitAndLemonsPage = () => {
    const { getProfitAndLemonsUsed } = useContext(ShopContext);
    const { profit, totalLemonsUsed } = getProfitAndLemonsUsed();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Profit and Lemons Used</h2>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
                <p className="text-gray-700 text-base mb-2">
                    <span className="font-semibold">Profit:</span> Kr{profit.toFixed(2)}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold">Lemons Used:</span> {totalLemonsUsed}
                </p>
            </div>
        </div>
    );
};

export default ProfitAndLemonsPage;
