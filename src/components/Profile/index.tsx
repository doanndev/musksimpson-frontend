'use client';
import React, { useRef, useState, useEffect } from 'react'
import { formatAddress } from '@/utils/index';
import DropdownIcon from '@/assets/svgs/DropdownIcon.svg';
import LogoutIcon from '@/assets/svgs/LogoutIcon.svg';
import { useAccount, useDisconnect } from 'wagmi';


const Profile = () => {
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (isConnected) {
        return (
            <div className="flex items-center space-x-4">
            <div className="relative size-fit" ref={dropdownRef}>
                <div
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className=" flex items-center gap-[10px] m-[15px] bg-black opacity-30 font-bold hover:cursor-pointer hover:opacity-40 text-[#949e9e] p-[15px] w-fit rounded-full"
                >
                    {formatAddress(address)}
                    <DropdownIcon />
                </div>
                {dropdownOpen && (
                    <div className="absolute left-7 mt-[-12px] w-fit bg-[#999999] text-white font-bold border rounded-xl shadow-md z-50">
                        <ul>
                            <li
                                className="px-4 py-2 hover:bg-[#888888] hover:rounded-tr-xl  hover:rounded-tl-xl cursor-pointer"
                            >
                                Your Wallet
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-[#888888] hover:rounded-br-xl  hover:rounded-bl-xl cursor-pointer"
                            >
                                <div
                                    className='flex gap-[10px] items-center'
                                    onClick={() => disconnect()}
                                >
                                    Disconnect
                                    <LogoutIcon />
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
        )
    }

    return (
        <div className='text-white flex items-center mx-auto'>You Need To Connect Your Wallet First!</div>
    )
}

export default Profile