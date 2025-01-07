import React from 'react'
import './FAQ.css'
import Accordion from '@/components/Accordion'


const FAQ = () => {
    return (
        <div id='faq' className='faq-section'>
            <div className='faq-title'>
                <h1 className='title-text'>Frequently Asked Questions</h1>
                <div className='title-underline'></div>
            </div>
            <div className='faq-container'>
                <Accordion />
            </div>
        </div>
    )
}

export default FAQ