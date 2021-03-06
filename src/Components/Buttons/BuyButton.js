import React, { useContext } from 'react';
import { SelectedCoinContext } from '../../context/SelectedCoinContext'
import { PurchaseAmountContext } from '../../context/PurchaseAmountContext'
import './ActionButtons.css';

const BuyButton = () => {
    const [selectedCoin] = useContext(SelectedCoinContext);
    const [purchaseAmount] = useContext(PurchaseAmountContext);

    const buyButtonHandler = () => {
        alert(`Are you sure you want to purchase ${purchaseAmount} of ${selectedCoin}?`)

    }

    return (
        <div className="action_button buy_but_hov" onClick={buyButtonHandler}>
            Buy
        </div>

    );

}

export default BuyButton;