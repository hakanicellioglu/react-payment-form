import React from 'react'
import './payment.css'

function Payment() {
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
                <a href="">
                    <i class="fa-regular fa-credit-card"></i>
                    <p className="payment-title">Credit Card</p>
                </a>
                <a href="">
                    <i class="fa-solid fa-building-columns"></i>
                    <p className="payment-title">Bank Transfer</p></a>
                <a href="">
                    <i class="fa-solid fa-building-columns"></i>
                    <p className="payment-title">Cosmic Points</p></a>
            </div>

            <div className="button-group">
                <button id="cancel" className="cancel">Cancel</button>
                <button id="subscribe" className="subscribe active">Subscribe</button>
            </div>

            <p className="description">By providing your card information, you allow us to charge your card for future payment in accordance with their terms.</p>
        </div>

    )
}

export default Payment