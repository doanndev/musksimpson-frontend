import React from 'react'
import './HowToBuy.css'

const HowToBuy = () => {
  return (
    <div id='howtobuy' className='howtobuy-section'>
      <div className='main-overlay'>
        <div className='howtobuy-title'>
          <h1 className='title-text'>HOW TO BUY</h1>
          <div className='title-underline'></div>
        </div>
        <div className='howtobuy-container'>
          <div className="card" id="card1">
            <div className='card-step'>
              <h1>1</h1>
            </div>
            <h3>CREATE WALLET</h3>
            <p>Find the presale widget at the top of this web page and connect your preferred wallet.</p>
          </div>
          <div className="card" id="card2">
            <div className='card-step'>
              <h1>2</h1>
            </div>
            <h3>GET SOME SOL</h3>
            <p>Once connected, you can participate in the presale on Binance Smart Chain.</p>
          </div>
          <div className="card" id="card3">
            <div className='card-step'>
              <h1>3</h1>
            </div>
            <h3>Get your tokens</h3>
            <p>Enter the amount of BNB you wish to swap for MSS and confirm the transaction in your wallet.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HowToBuy