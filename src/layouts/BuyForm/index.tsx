"use client";
import React, { useState, useEffect } from 'react';
import './BuyForm.css';
import Image from 'next/image';
import WalletAction from '@/components/WalletAction';
import Profile from '@/components/Profile';

const BuyForm = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set thời gian kết thúc của đếm ngược
        const targetDate: Date = new Date("2025-01-15T00:00:00"); // Ngày và giờ kết thúc

        const interval = setInterval(() => {
            const now: Date = new Date();
            const timeDifference: number = Number(targetDate) - Number(now); // Cast to number

            if (timeDifference <= 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
            });
        }, 1000);

        return () => clearInterval(interval); // Clean up interval khi component unmount
    }, []);

    return (
        <div className='buy-form'>
            <div className='introduce-container'>
                <div className='introduce-img'>
                    <Image src={'/imgs/WelcomeSimpson.png' } layout="responsive" width={400} height={400} alt={'Welcome'} />
                </div>
                <div className='introduce-content'>
                    <h1 className='buy-title'>MUSK SIMPSON</h1>
                    <p className='introduce-text'>Musk Simpson is a newly emerging meme cryptocurrency that combines the popularity of Elon Musk with the cultural iconography of the animated series The Simpsons.</p>
                    <div className='flex items-center gap-[10px]'>
                        <button
                            className="whitepaper-button bg-blue-500 hover:bg-blue-700 w-fit text-white font-bold py-2 px-4 rounded"
                            disabled={true}
                        >
                            WHITE PAPER
                        </button>
                        <button
                            className="nft-button w-fit text-white font-bold py-2 px-4 rounded"
                            disabled={true}
                        >
                            NFT STAKING COMING SOON
                        </button>
                    </div>
                </div>
            </div>
            <div className='buy-section'>
                <div className='form-section'>
                    <h1 className='buy-title'>MUSK SIMPSON</h1>
                    <div className="countdown">
                        <div className="time">
                            <span>{timeLeft.days}</span>
                            <span>Days:</span>
                        </div>
                        <div className="time">
                            <span>{timeLeft.hours}</span>
                            <span>Hours:</span>
                        </div>
                        <div className="time">
                            <span>{timeLeft.minutes}</span>
                            <span>Minutes:</span>
                        </div>
                        <div className="time">
                            <span>{timeLeft.seconds}</span>
                            <span>Seconds:</span>
                        </div>
                    </div>
                    <div className='countdown-title'><p>Pre-sale ends in:</p></div>
                    <h3 className='price-tag'>1 MSS = 0,000000012$</h3>
                    <div className='break-line'></div>
                    <div className='buy-container'>
                        <div className='buy-container_infor'>
                            <Profile />
                        </div>
                        <WalletAction />
                    </div>
                    <div className='break-line'></div>
                    <h1 className='user-purchase'>Your Purchase: 0 MSS</h1>
                </div>
            </div>
        </div>
    );
}

export default BuyForm;
