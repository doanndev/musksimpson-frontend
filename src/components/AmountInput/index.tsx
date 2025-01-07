import { useState } from "react";

function Component() {
  const [amount, setAmount] = useState("");

  const Exchange = (amount: string) => {
    const numAmount = Number(amount);
    if (numAmount <= 0) {
      return "";
    }
    const result = numAmount * 84000000000;
    return `= ${result.toLocaleString()} MSS`;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;

    // Đảm bảo giá trị không âm và không nhỏ hơn 0.1
    if (value < 0) {
      setAmount("0");
    } else if (value < 0.1) {
      setAmount("0.1");
    } else {
      setAmount(value.toFixed(1)); // Giới hạn giá trị đến 1 chữ số thập phân
    }
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
}

export default Component;
