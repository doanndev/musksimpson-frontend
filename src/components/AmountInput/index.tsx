import React from "react";

interface AmountInputProps {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
}

const AmountInput: React.FC<AmountInputProps> = ({ amount, setAmount }) => {
  const Exchange = (amount: string) => {
    const numAmount = Number(amount);
    if (numAmount <= 0) {
      return "";
    }
    const result = numAmount * 84000000000;
    return `= ${result.toLocaleString()} MSS`;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseFloat(e.target.value) || 0;

    if (value < 0) {
      value = 0;
    } else if (value < 0.1) {
      value = 0.1; 
    }

    setAmount(value.toFixed(1)); 
  };

  const isError = parseFloat(amount) < 0.1 && amount !== "";

  return (
    <div className="mx-[5%] my-[25px] w-full">
      <input
        className={`text-black w-full px-4 py-2 border ${isError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500`}
        type="number"
        step="0.1"
        placeholder="Amount (BNB)"
        value={amount}
        min="0.1"
        onChange={handleAmountChange}
      />
      <p className={`ml-[5%] h-[10px] ${isError ? 'text-red-500' : 'text-white'}`}>
        {isError ? "Minimum value is 0.1" : Exchange(amount)}
      </p>
    </div>
  );
};

export default AmountInput;
