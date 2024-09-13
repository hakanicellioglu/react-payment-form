import React, { useState } from 'react'
import './payment.css'

function Payment() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(selectedOption === option ? '' : option);
    };



    // It's max 3 digits
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const sanitizedValue = inputValue.replace(/\D/g, '');
        if (sanitizedValue.length <= 3) {
            setValue(sanitizedValue);
        }
    }



    return (
        <div className="payment">
            <header className="header">
                <h4 className="brand">Cosmic</h4>
                <h2 className="title">Upgrade to Plus</h2>
                <p className="description">Do more with unlimited blocks, files, automations & integrations.</p>
            </header>

            <div className="input-group">
                <label htmlFor="accountName">Billed To</label>
                <input type="text" name="accountName" id="accountName" placeholder="Account Name" />
            </div>

            <label>Payments Details</label>
            <div className="payment-detail">
                <a
                    href="#"
                    className={selectedOption === 'Credit Card' ? 'selected' : ''}
                    onClick={() => handleOptionClick('Credit Card')}
                >
                    <i className="fa-regular fa-credit-card"></i>
                    <p className="payment-title">Credit Card</p>
                </a>
                <a
                    href="#"
                    className={selectedOption === 'Bank Transfer' ? 'selected' : ''}
                    onClick={() => handleOptionClick('Bank Transfer')}
                >
                    <i className="fa-solid fa-building-columns"></i>
                    <p className="payment-title">Bank Transfer</p>
                </a>
                <a
                    href="#"
                    className={selectedOption === 'Cosmic Points' ? 'selected' : ''}
                    onClick={() => handleOptionClick('Cosmic Points')}
                >
                    <i className="fa-solid fa-building-columns"></i>
                    <p className="payment-title">Cosmic Points</p>
                </a>
            </div>

            {selectedOption === 'Credit Card' && (
                <div className="credit-card-details">
                    <div className="input-group">
                        <input type="number" name="cardNumber" id="cardNumber" placeholder="Credit Card Number" />
                    </div>
                    <div className="input-group date-cvc">
                        <input type="text" name="last-date" id="last-date" placeholder="Last Date (mm/yyyy)" pattern="\d{2}/\d{4}" title="Please enter a date in the format mm/yyyy" />
                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            placeholder="CVC"
                            maxLength="3"
                        />
                    </div>
                </div>
            )}
            {selectedOption === 'Bank Transfer' && (
                <div className="bank-transfer-details">
                    <p>Bank Transfer Payment Details...</p>
                </div>
            )}
            {selectedOption === 'Cosmic Points' && (
                <div className="cosmic-points-details">
                    <p>Cosmic Points Payment Details...</p>
                </div>
            )}
            <div className="button-group">
                <button id="cancel" className="cancel">Cancel</button>
                <button id="subscribe" className="subscribe active">Subscribe</button>
            </div>

            <p className="description">By providing your card information, you allow us to charge your card for future payment in accordance with their terms.</p>
        </div >

    )
}

export default Payment