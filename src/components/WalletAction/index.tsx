/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from 'react';
import { useAccount, useSendTransaction, usePublicClient } from 'wagmi';
import { parseEther } from 'ethers';
import AmountInput from '@/components/AmountInput';
import Swal from 'sweetalert2';

const WalletAction = () => {
    const { address, isConnected } = useAccount();
    const publicClient = usePublicClient();
    const chainId = publicClient?.chain.id;
    const recipient = '034C77088EdECbe710caB3B8AB8110D392E14602';
    const [amount, setAmount] = useState<string>("");
    const { sendTransaction, status } = useSendTransaction();


    useEffect(() => {
        switch (status) {
            case 'success':
                Swal.fire({
                    title: 'Buy Success',
                    text: 'Hold and enjoy!',
                    icon: 'success',
                })
                break;
            case 'error':
                Swal.fire({
                    title: 'Something wrong',
                    text: 'Please try again!',
                    icon: 'error',
                })
                break;
            default:
                break;
        }
    }, [status]);

    const handleTransfer = () => {
        if (!amount) {
            Swal.fire({
                title: 'Something wrong',
                text: 'Please enter amount!',
                icon: 'error',
            })
            return;
        }

        if (chainId !== 56) {
            alert('Please switch to Binance Smart Chain (BSC) to send BNB');
            return;
        }

        sendTransaction({
            to: `0x${recipient}`,
            value: parseEther(amount),
        });
    };


    if (isConnected) {
        return (
            <div className="flex flex-col w-[100%] items-center">
                <div className="flex flex-col w-[100%] items-center gap[50px]">
                    <AmountInput amount={amount} setAmount={setAmount} />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 w-fit text-white font-bold py-2 px-4 rounded"
                        onClick={handleTransfer}
                        disabled={status === 'pending'}
                    >
                        {status === 'pending' ? 'Buying...' : 'Buy'}
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col w-[100%] items-center">
                <AmountInput amount={amount} setAmount={setAmount} />
                <div dangerouslySetInnerHTML={{ __html: '<appkit-button></appkit-button>' }} />
                {/* <appkit-button /> */}
            </div>
        );
    }
};

export default WalletAction;
