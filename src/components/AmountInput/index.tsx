// AmountInput.tsx

type AmountInputProps = {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
};


const AmountInput: React.FC<AmountInputProps> = ({ amount, setAmount }) => {

        function Exchange(amount: string) {
            if (Number(amount) == 0) {
                return '';
            } else if (Number(amount) < 0) {
                return '';
            } else if (Number(amount) > 0) {
                return `= ${Number(amount) * 84000000000} MSS`;
            }
            return '';
        }

  return (
    <div className='mx-[5%] my-[25px] w-full'>
    <input
      className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500"
      type="number"
      placeholder="Amount (BNB)"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
    <p className='text-white ml-[5%] h-[10px]'>{Exchange(amount)}</p>
    </div>
  );
};

export default AmountInput;
