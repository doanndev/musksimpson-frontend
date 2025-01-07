import React from 'react'
import './Footer.css'
import XLogo from '@/assets/svgs/twitter-x-logo.svg';
import TelegramLogo from '@/assets/svgs/telegram-logo.svg';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-link'>
                <div className='footer-title'>Join us:</div>
                <div className='footer-group'>
                    <div className='footer-item'>
                        <a href='' target="_blank" rel="noopener noreferrer" className="joinUsButton">
                            <button className="joinUsButton__button">
                                <span className="joinUsButton__icon"><TelegramLogo /></span>
                                Telegram
                            </button>
                        </a>
                    </div>
                    <div className='footer-item'>
                    <div className='footer-item'>
                        <a href='' target="_blank" rel="noopener noreferrer" className="joinUsButton">
                            <button className="joinUsButton__button">
                                <span className="joinUsButton__icon"><XLogo /></span>
                                X
                            </button>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>© 2025 Copyright: <strong>Musk Simpson</strong></p>
            </div>
        </div>
    )
}

export default Footer