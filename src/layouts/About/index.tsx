import React from 'react'
import './About.css'
import Image from 'next/image'


const About = () => {
    return (
        <div id='about' className='about-section'>
            <div className='about-title'>
                <h1 className='title-text'>ABOUT</h1>
                <div className='title-underline'></div>
            </div>
            <div className='about-container'>
                <div className='about-img'>
                  <div className='about-img_content'>
                    <div className='about-window'> 
                    <Image src={'/imgs/AboutMusksimpson.png'} layout='fill' alt={''} />
                    </div>
                  </div>
                </div>
                <div className='about-content'>
                    <p className='about-paragraph'>
                        Musk Simpson has quickly attracted the interest of investors, especially those who enjoy meme culture. The standout features and development strategies of Musk Simpson Coin could create exciting investment opportunities for those seeking novelty in the cryptocurrency market
                    </p>
                </div>
            </div>
        </div>

    )
}

export default About