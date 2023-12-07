// AccordionItem.js
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './AccordionItem.css';

const AccordionItem = ({ title, content, image, textseri }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='accordion-item-notifikasi'>
            <div
                onClick={toggleAccordion}
                className='accordion-title-notifikasi'
            >
                <div className='title-content'>
                    <span>{title}</span>
                    <p>{textseri}</p>
                    {image && (
                        <img src={image} alt='Icon' className='title-image' />
                    )}
                </div>
                <FaChevronDown
                    className={`chevron-icon-accordion-notifikasi ${
                        isOpen ? 'open' : ''
                    }`}
                />
            </div>
            {isOpen && (
                <p className='accordion-content-notifikasi'>{content}</p>
            )}
        </div>
    );
};

export default AccordionItem;
