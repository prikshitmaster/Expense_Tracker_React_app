import React, { useState } from "react";

export const Design = () => {
  const [addAmount, setAddAmount] = useState();
  const [amountData, setAmountData] = useState([]);

  const HandleChange= (e)=>{
    setAddAmount(e.target.value)
  }
  
  const HandleOnClick = () => {
    setAmountData(addAmount );
      setAmountData((newAmount ) => [...newAmount, amountData]);
    console.log(amountData)
    setAddAmount('')

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full sm:max-w-md px-6 py-12 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Expense Tracker
        </h2>
        <div className="flex flex-col items-center mb-8">
          <div className="text-xl font-medium text-gray-600 mb-2">
            Your Balance
          </div>
          <div className="text-4xl font-bold text-gray-900">${amountData}</div>
        </div>
        <div className="flex justify-between mb-8">
          <div className="w-1/2 p-4 bg-green-500 rounded-lg text-center">
            <div className="text-lg font-medium text-white mb-2">Income</div>
            <div className="text-3xl font-bold text-white">5</div>
          </div>
          <div className="w-1/2 p-4 bg-red-500 rounded-lg text-center">
            <div className="text-lg font-medium text-white mb-2">Expense</div>
            <div className="text-3xl font-bold text-white">120</div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">History</h3>
          <div className="space-y-4">
            <div className="flex items-center bg-gray-200 rounded-lg shadow-md p-4">
              <div className="text-gray-600 mr-4">01</div>
              <div className="text-gray-800">$20.00</div>
              <button className="ml-auto px-2 py-1 bg-red-500 rounded-md text-white font-bold">
                x
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Add New Transaction
          </h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="transaction-name" className="text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="transaction-name"
                placeholder="Enter transaction name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="transaction-amount"
                className="text-gray-700 mb-2"
              >
                Amount
              </label>
              <input
                onChange={HandleChange}
                value={addAmount}
                type="number"
                id="transaction-amount"
                placeholder="Enter amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                onClick={HandleOnClick}
                className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors"
              >
                Add Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
