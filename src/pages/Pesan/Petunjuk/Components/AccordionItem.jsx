// AccordionItem.js
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Menggunakan ikon chevron down dari react-icons
import './AccordionItem.css';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='accordion-item'>
            <div onClick={toggleAccordion} className='accordion-title'>
                <h3>{title}</h3>
                <FaChevronDown
                    className={`chevron-icon-accordion ${isOpen ? 'open' : ''}`}
                />
            </div>
            {isOpen && <p className='accordion-content'>{content}</p>}
        </div>
    );
};

export default AccordionItem;
