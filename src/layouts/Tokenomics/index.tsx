import React from 'react'
import './Tokenomics.css'
import Image from 'next/image'

const Tokenomics = () => {
    return (
        <div className='tokenomics-section'>
            <div className='tokenomics-title'>
                <h1 className='title-text'>TOKENOMICS</h1>
                <div className='title-underline'></div>
            </div>
            <div className='tokenomics-infor'>
                <div className='total-supply'>
                    <h1>Total Supply</h1>
                    <p>100.000.000.000</p>
                </div>
                <div className='tokenomics-container'>
                    <div className='tokenomics-img'>
                        <Image src={'/imgs/tokenomics.png'} width={500} height={500} alt={''} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics